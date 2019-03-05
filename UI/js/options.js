document.getElementById("loadOptions").addEventListener('click', loadOptions)
function loadOptions() {
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
            let options = ""
            let officeOtions = document.getElementById('officeOptions');
            options += `<option value="0">Choose Office</option>`
            offices.forEach(office => {
                options += `<option value="${office.id}">${office.name}</option>`;
            })
            officeOtions.innerHTML = options;
        })

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
        .then((response) => {
            let parties = response['data'];
            let options = ""
            let partyOtions = document.getElementById('partyOptions');
            options += `<option value="0">Choose Party</option>`
            parties.forEach(party => {
                options += `<option value="${party.id}">${party.name}</option>`;
            })
            partyOtions.innerHTML = options;
        })
}