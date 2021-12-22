async function fetchRows(setRows) {
    await fetch('http://localhost:9000/api/users')
        .then(result => result = result.json())
        .then(result => setRows(result))
        .catch(error => console.log(error));
}

export default fetchRows