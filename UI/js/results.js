document.getElementById("loadResults").addEventListener('click', getResults)
function getResults() {
    fetch('https://barno-politico-api.herokuapp.com/api/v2/office/1/result', {
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
            let results = response['data'];
            console.log(results)

            let results_table = document.getElementById('results_table');
            th =
                `<tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Other Name</th>
                    <th>Office</th>
                    <th>Party</th>
                    <th>Votes</th>
                 </tr> `
            results_table.innerHTML = th
            results.forEach(result => {
                results_table.innerHTML += '<tr>' +
                    '<td>' + result.candidate + '</td>' +
                    '<td>' + result.lastname + '</td>' +
                    '<td>' + result.othername + '</td>' +
                    '<td>' + result.office + '</td>' +
                    '<td>' + result.party + '</td>' +
                    '<td>' + result.results + '</td>' +
                    '</tr>';
            })
        })
}