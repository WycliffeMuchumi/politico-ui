document.getElementById('expressInterest').addEventListener('submit', expressInterest)

function expressInterest(e) {
    e.preventDefault();
    let officeId = document.getElementById('officeOptions').value;
    let partyId = document.getElementById('partyOptions').value;
    let userId = localStorage.userId
    fetch('https://barno-politico-api.herokuapp.com/api/v2/office/' + officeId + '/nomination', {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.token
        }),
        body: JSON.stringify({
            user: parseInt(userId, 10), office: parseInt(officeId, 10), party: parseInt(partyId, 10)
        })
        
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.status == 201) {
                document.getElementById('success-display').innerHTML = response.message + "!"
                document.getElementById('success-display').style.display = "block"
                setTimeout(function () {
                    document.getElementById('success-display').style.display = "none"
                }, 2000);
            } else if (response.status == 400) {
                document.getElementById('error-display').innerHTML = response.message + "!"
                document.getElementById('error-display').style.display = "block"
                setTimeout(function () {
                    document.getElementById('error-display').style.display = "none"
                }, 2000);
            }
        })
}