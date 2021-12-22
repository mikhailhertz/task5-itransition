async function fetchRows(setRows) {
    await fetch('https://task5-itransition.herokuapp.com/api/users')
        .then(result => result = result.json())
        .then(result => setRows(result))
        .catch(error => console.log(error));
}

export default fetchRows