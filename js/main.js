// Função de registro
function signup(e) {
    event.preventDefault();

    // Pega os dados nos inputs do formulário
    var name = document.getElementById('reg-name').value;
    var email = document.getElementById('reg-email').value;
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;

    // variáveis que armazenam os dados dos inputs
    var user = {
        name: name,
        email: email,
        username: username,
        password: password,
        termos: false,
    };

    if (checkInputs() === false) {
        alert("Invalid form.")
    } else {
        // armazenando JSON e localStorage
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert("User registered successfully!");
        window.location.href = "index.html";

    }

}

// Função de logar
function login(e) {
    event.preventDefault();

    // Pega os dados nos inputs do login
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    // Puxa os dados do LocalStorage
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    // Condição de login
    if (user == null) {
        alert('Wrong pass or username.');
    } else if (username == data.username && pass == data.password) {
        alert('Successfully logged in.');
        window.location.href = "homepage.html";
    } else {
        alert('Wrong pass or username.');
    }
}