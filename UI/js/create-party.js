let create = document.getElementById('create_party');
if (create) {
    create.addEventListener('click', createParty);
}
function createParty(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let hqaddress = document.getElementById('hqaddress').value;
    let logourl = document.getElementById('logourl').value;

    fetch('https://barno-politico-api.herokuapp.com/api/v2/parties', {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.token
        }),
        body: JSON.stringify({ name: name, hqAddress: hqaddress, logoUrl: logourl })
    })
        .then(result => result.json().then(data => ({ status: result.status, body: data })))
        .then(result => {
            console.log(result.body.message)
            if (result.status == 201) {
                document.getElementById('success-display').innerHTML = result.body.message + "!"
                document.getElementById('success-display').style.display = "block"
            } else if (result.status == 400) {
                document.getElementById('error-display').innerHTML = result.body.message + "!"
                document.getElementById('error-display').style.display = "block"
            }
            else {
                document.getElementById('error-display').innerHTML = result.body.message + "!"
                document.getElementById('error-display').style.display = "block"
            }
        })
}