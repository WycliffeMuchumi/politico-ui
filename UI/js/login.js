document.getElementById('signIn').addEventListener('click', userLogin);

function userLogin(e) {
    e.preventDefault();
    let url = 'https://barno-politico-api.herokuapp.com/api/v2/auth/login';

    let email = document.getElementById('email_address').value;
    let password = document.getElementById('password').value;

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Origin': '<origin> | *',
            mode: 'no-cors',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify({ email: email, password: password }),
    })
        .then(result => result.json().then(data => ({ status: result.status, body: data })))
        .then((result) => {
            if (result.status == 201) {
                localStorage.token = result.body.data[0].token
                if (result.body.data[0].user.isAdmin == true) {
                    localStorage.isAdmin = new Boolean(true)
                    window.location.href = 'admin.html'
                } else {
                    localStorage.isAdmin = new Boolean(false)
                    window.location.href = 'user.html'
                }
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