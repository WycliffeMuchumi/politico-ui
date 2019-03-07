document.getElementById("loadPoliticians").addEventListener('click', getPoliticians)
function getPoliticians() {
    fetch('https://barno-politico-api.herokuapp.com/api/v2/office/2/candidates', {
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
            let politicians = response['data'];
            let politicians_table = document.getElementById('politicians_table');
            th =
                `<tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Office</th>
                    <th>Party</th>
                    <th>Date Applied</th>
                    <th>Approved</th>
                    <th>Date Approved</th>
                    <th>Action</th>
                 </tr> `
            politicians_table.innerHTML = th
            politicians.forEach(politician => {
                politicians_table.innerHTML += '<tr>' +
                    '<td>' + politician.firstname + '</td>' +
                    '<td>' + politician.lastname + '</td>' +
                    '<td>' + politician.office + '</td>' +
                    '<td>' + politician.party + '</td>' +
                    '<td>' + politician.dateapplied + '</td>' +
                    '<td>' + politician.approved + '</td>' +
                    '<td>' + politician.dateapproved + '</td>' +
                    '<td><button button id="' + politician.usr + '" onclick="approvePolitician(this.id)">Approve</button></td>' +
                    '</tr>';
            })
        })
}

function approvePolitician(id) {
    fetch('https://barno-politico-api.herokuapp.com/api/v2/office/2/register', {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.token
        }),
        body: JSON.stringify({ candidate: parseInt(id, 10) })
    })
        .then((response) => {
            return response.json()
        })
        .then(response => {
            if (response.status == 201) {
                document.getElementById('success-display').innerHTML = response.message + "!"
                document.getElementById('success-display').style.display = "block"
                setTimeout(function () {
                    document.getElementById('success-display').style.display = "none"
                }, 2000);
            } else {
                document.getElementById('error-display').innerHTML = response.message + "!"
                document.getElementById('error-display').style.display = "block"
                setTimeout(function () {
                    document.getElementById('error-display').style.display = "none"
                }, 2000);
            }

        })
}