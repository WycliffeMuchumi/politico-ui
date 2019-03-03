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
        .then((result) => {
            console.log(result)
            let offices = result['data'];
            let offices_table = document.getElementById('offices_table');
            th =
                `<tr>
                    <th>Office ID</th>
                    <th>Ofice Name</th>
                    <th>Office Type</th>
                    <th>Action</th>
                 </tr> `
            offices_table.innerHTML = th
            offices.forEach(office => {
                offices_table.innerHTML += '<tr>' +
                    '<td>' + office.id + '</td>' +
                    '<td>' + office.name + '</td>' +
                    '<td>' + office.officeType + '</td>' +
                    '<td><button>Edit</button><button>Delete</button></td>' +
                    '</tr>';
            })
        })
}