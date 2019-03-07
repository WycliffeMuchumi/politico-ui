document.getElementById("loadVoteOptions").addEventListener('click', loadOptions)
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
            let officeOtions = document.getElementById('officeVoteOptions');
            options += `<option value="0">Choose Office</option>`
            offices.forEach(office => {
                options += `<option value="${office.id}">${office.name}</option>`;
            })
            officeOtions.innerHTML = options;
        })

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
            let options = ""
            let candidateOptions = document.getElementById('candidateOptions');
            options += `<option value="0">Choose Candidate</option>`
            candidates.forEach(candidate => {
                options += `<option value="${candidate.usr}">${candidate.firstname + ' ' + candidate.lastname + ' ' + candidate.othername}</option>`;
            })
            candidateOptions.innerHTML = options;
        })
}