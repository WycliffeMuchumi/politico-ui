document.getElementById('voting').addEventListener('submit', voteBallot)

function voteBallot(e) {
    e.preventDefault();
    let officeId = document.getElementById('officeVoteOptions').value;
    let candidateId = document.getElementById('candidateOptions').value;
    let userId = localStorage.userId
    fetch('https://barno-politico-api.herokuapp.com/api/v2/votes/', {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.token
        }),
        body: JSON.stringify({
            office: parseInt(officeId, 10), candidate: parseInt(candidateId, 10), voter: parseInt(userId, 10)
        })

    })
        .then((response) => response.json())
        .then((response) => {
            if (response.status == 201) {
                document.getElementById('success-displays').innerHTML = response.message + "!"
                document.getElementById('success-displays').style.display = "block"
                setTimeout(function () {
                    document.getElementById('success-displays').style.display = "none"
                }, 2000);
            } else {
                document.getElementById('error-displays').innerHTML = response.message + "!"
                document.getElementById('error-displays').style.display = "block"
                setTimeout(function () {
                    document.getElementById('error-displays').style.display = "none"
                }, 2000);
            }
        })
}