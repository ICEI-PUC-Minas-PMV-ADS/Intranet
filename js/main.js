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
        // armazenando JSON e localStorage
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        window.location.href = "index.html";
}

// Função de logar
function login(e) {
    event.preventDefault()
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
        localStorage.setItem("usuariologado", data.username);

        if (data.termos) {
            window.location.href = "homepage.html";
        } else {
            window.location.href = "aceite-termos.html";
        }

    } else {
        alert('Wrong pass or username.');
    }

}
//função para salvar a informação que o usuário logado aceitou os termos
function aceitou() {
    // pegar o nome do usuário logado
    var usuariologado = localStorage.getItem("usuariologado");
    // pegar os dados desse usuário logado
    var user = localStorage.getItem(usuariologado);
    user = JSON.parse(user);
    // trocar o valor do termos pra true
    user = { ...user, termos: true }
    // salvar esses novos dados
    user = JSON.stringify(user);
    localStorage.setItem(usuariologado, user);
    // redirecionar pra a homepage
    window.location.href = "homepage.html";
}
