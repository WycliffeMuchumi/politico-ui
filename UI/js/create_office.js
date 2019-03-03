let create = document.getElementById('create_office');
if (create) {
    create.addEventListener('click', createOffice);
}
function createOffice(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let officeType = document.getElementById('officeType').value;

    fetch('https://barno-politico-api.herokuapp.com/api/v2/offices', {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.token
        }),
        body: JSON.stringify({ name: name, officeType: officeType })
    })
        .then(result => result.json().then(data => ({ status: result.status, body: data })))
        .then(result => {
            if (result.status == 201) {
                document.getElementById('success-display').innerHTML = result.body.message + "!"
                document.getElementById('success-display').style.display = "block"
                setTimeout(function () {
                    window.location.replace("admin.html")
                }, 2000);
            } else if (result.status == 400) {

                document.getElementById('error-display').innerHTML = result.body.message + "!"
                document.getElementById('error-display').style.display = "block"
                setTimeout(function () {
                    document.getElementById('error-display').style.display = "none"
                }, 2000);
            }
            else {
                document.getElementById('error-display').innerHTML = result.body.message + "!"
                document.getElementById('error-display').style.display = "block"
                setTimeout(function () {
                    document.getElementById('error-display').style.display = "none"
                }, 2000);
            }
        })
}