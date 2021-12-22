const express = require('express');
const path = require('path');
const app = express();
const { auth } = require('express-openid-connect');
const axios = require('axios');
const request = require('request');

app.use(express.json());
app.use(auth({
  authRequired: false,
  auth0Logout: true,
  secret: 'MS2_76y7hXUlcZJqmhLbh2Fuwum3q7Ylsye16QRxjD-3bgE9GDiqMo1wvS5JnEXc',
  baseURL: 'http://localhost:9000/',
  clientID: 'K65Uibv49ncUWeQIzvX5MLrqCNowuF2M',
  issuerBaseURL: 'https://dev-tk8k8at7.us.auth0.com'
}));

const tokenRequest = {
  method: 'POST',
  url: 'https://dev-tk8k8at7.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"K65Uibv49ncUWeQIzvX5MLrqCNowuF2M","client_secret":"MS2_76y7hXUlcZJqmhLbh2Fuwum3q7Ylsye16QRxjD-3bgE9GDiqMo1wvS5JnEXc","audience":"https://dev-tk8k8at7.us.auth0.com/api/v2/","grant_type":"client_credentials"}'
}

app.use(async (req, res, next) => {
  request(tokenRequest, (error, apiResponse, body) => {
    if (error) console.log(error);
    if (req.oidc.isAuthenticated()) {
      axios({
        method: 'GET',
        url: 'https://dev-tk8k8at7.us.auth0.com/api/v2/users/' + req.oidc.user['sub'],
        headers: { 'Authorization': 'Bearer ' + JSON.parse(body)['access_token'] }
      })
        .then(apiResponse => (apiResponse.data['blocked']) ? res.oidc.logout() : next())
        .catch(error => {
          if (error.response.data['errorCode'] === 'inexistent_user') res.oidc.logout()
          else console.log(error);
        });
    } else {
      res.oidc.login();
    }
  });
})

function getUsername(user) {
  return (user.hasOwnProperty('username')) ? user.username : user.nickname;
}

app.get('/api/users', async (req, res) => {
  request(tokenRequest, (error, apiResponse, body) => {
    if (error) console.log(error);
    axios({
      method: 'GET',
      url: 'https://dev-tk8k8at7.us.auth0.com/api/v2/users?fields=user_id%2Cusername%2Cnickname%2Cemail%2Ccreated_at%2Clast_login%2Cblocked&include_fields=true',
      headers: { 'Authorization': 'Bearer ' + JSON.parse(body)['access_token'] }
    })
      .then(apiResponse => {
        apiResponse.data.forEach(user => {
          user.username = getUsername(user);
          !user.hasOwnProperty('blocked') && (user.blocked = false);
          delete user.nickname;
        });
        res.json(apiResponse.data.sort((a, b) => {
          var x = a.username.toLowerCase();
          var y = b.username.toLowerCase();
          return ((x === y) ? 0 : ((x > y) ? 1 : -1));
        }));
      })
      .catch(error => console.log(error));
  });
});

const messageMap = new Map();

app.post('/api/send', async (req, res) => {
  if (!messageMap.has(req.body.to)) messageMap.set(req.body.to, []);
  request(tokenRequest, (error, apiResponse, body) => {
    if (error) console.log(error);
    if (req.oidc.isAuthenticated()) {
      axios({
        method: 'GET',
        url: 'https://dev-tk8k8at7.us.auth0.com/api/v2/users/' + req.oidc.user.sub,
        headers: { 'Authorization': 'Bearer ' + JSON.parse(body)['access_token'] }
      })
        .then(apiResponse => {
          messageMap.get(req.body.to).unshift({ 'message': req.body.message, 'from': getUsername(apiResponse.data) });
        })
        .catch(error => console.log(error));
    }
  });
});

app.get('/api/messages', async (req, res) => {
  res.json(messageMap.get(getUsername(req.oidc.user)));
});

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(process.env.PORT || 9000);