document.getElementById("loadCandidates").addEventListener('click', getCandidates)
function getCandidates() {
    fetch('https://barno-politico-api.herokuapp.com/api/v2/candidates', {
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
            let candidates = response['data'];
            let candidates_table = document.getElementById('candidates_table');
            th =
                `<tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Other Name</th>
                    <th>Office</th>
                    <th>Party</th>
                    <th>Date Applied</th>
                    <th>Date Approved</th>
                 </tr> `
            candidates_table.innerHTML = th
            candidates.forEach(candidate => {
                candidates_table.innerHTML += '<tr>' +
                    '<td>' + candidate.firstname + '</td>' +
                    '<td>' + candidate.lastname + '</td>' +
                    '<td>' + candidate.othername + '</td>' +
                    '<td>' + candidate.office + '</td>' +
                    '<td>' + candidate.party + '</td>' +
                    '<td>' + candidate.dateapplied + '</td>' +
                    '<td>' + candidate.dateapproved + '</td>' +
                    '</tr>';
            })
        })
}