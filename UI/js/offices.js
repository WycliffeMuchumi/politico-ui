document.getElementById("loadOffices").addEventListener('click', getOffices)
function getOffices() {
    fetch('https://barno-politico-api.herokuapp.com/api/v2/offices', {
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
            let offices = response['data'];
            let offices_table = document.getElementById('offices_table');
            th =
                `<tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Office</th>
                    <th>Date Created</th>
                 </tr> `
            offices_table.innerHTML = th
            offices.forEach(office => {
                offices_table.innerHTML += '<tr>' +
                    '<td>' + office.id + '</td>' +
                    '<td>' + office.officeType + '</td>' +
                    '<td>' + office.name + '</td>' +
                    '<td>' + office.dateCreated + '</td>' +
                    '</tr>';
            })
        })
}