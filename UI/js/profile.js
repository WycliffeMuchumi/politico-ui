document.getElementById("profile").addEventListener("load", getUser)
function getUser() {
    fetch('https://barno-politico-api.herokuapp.com/api/v2/auth/users/' + localStorage.userId, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.token
        })
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
        })
}
