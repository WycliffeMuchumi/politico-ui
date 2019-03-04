document.getElementById('signUp').addEventListener('click', userSignUp);

function userSignUp(e) {
    e.preventDefault();
    let url = 'https://barno-politico-api.herokuapp.com/api/v2/auth/signup';

    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let otherName = document.getElementById('other_name').value;
    let email = document.getElementById('email_address').value;
    let phoneNumber = document.getElementById('phone').value;
    let passportUrl = document.getElementById('url').value;
    let password = document.getElementById('password').value;

    fetch(url, {
        method: 'POST',
        headers: {
            mode: 'no-cors',
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Origin': '<origin> | *',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            otherName: otherName,
            email: email,
            phoneNumber: phoneNumber,
            passportUrl: passportUrl,
            password: password
        }),
    })
        .then(result => result.json().then(data => ({ status: result.status, body: data })))
        .then((result) => {
            if (result.status == 201) {
                document.getElementById('success-display').innerHTML = result.body.message + "!"
                document.getElementById('success-display').style.display = "block"
                setTimeout(function () {
                    window.location.href = 'login.html'
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
            }
        })
}