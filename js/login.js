function login(event) {
    event.preventDefault();

    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    var messaage = document.getElementById("response");


    if (email.length == 0) {
        messaage.innerHTML = '<p>Email must be filled!</p>';
        scroll();
        return;
    }

    if (password.length == 0) {
        messaage.innerHTML = '<p>Password must be filled!</p>';
        scroll();
        return;
    }


    window.location.replace("index.html");

}