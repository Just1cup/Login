
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Admin" && password === "Admin") {
        document.getElementById("loginMessage").innerHTML = "Login successful";
        document.getElementById("loginMessage").style.color = 'rgb(63, 185, 80)';
    } else {
        document.getElementById("loginMessage").innerHTML = "Login failed";
        document.getElementById("loginMessage").style.color = 'red';
    }
}

document.getElementById('username').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        validateLogin();
    }
});

document.getElementById('password').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        validateLogin();
    }
})