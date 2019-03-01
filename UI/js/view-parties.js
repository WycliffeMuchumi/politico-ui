window.onload = function getParties() {

    fetch('https://barno-politico-api.herokuapp.com/api/v2/parties', {
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
            let parties = result['data'];
            let parties_table = document.getElementById('parties_table');
            th =
                `<tr>
                    <th>Party ID</th>
                    <th>Party Name</th>
                    <th>Party HeadQuarters</th>
                    <th>Party Logo</th>
                 </tr> `
            parties_table.innerHTML = th
            parties.forEach(party => {

                parties_table.innerHTML += '<tr>' +
                    '<td>' + party.id + '</td>' +
                    '<td>' + party.name + '</td>' +
                    '<td>' + party.hqaddress + '</td>' +
                    '<td><img src=' + party.logourl + '></td>' +
                    '</tr>';
            })
        })
}
