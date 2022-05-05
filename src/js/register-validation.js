const form = document.getElementById('form');
const nameU = document.getElementById('reg-name');
const email = document.getElementById('reg-email');
const username = document.getElementById('reg-username');
const pass = document.getElementById('reg-password')
let errorName = false;
let errorEmail = false;
let errorUsername = false;
let errorPass = false;

form.addEventListener('keyup', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // pega os valores dos inputs
    const nameValue = nameU.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passValue = pass.value.trim();

    if(nameValue === '' || nameValue.length <= 2) {
        // mostra erro
        // adiciona classe de erro
        setErrorFor(nameU);
        errorName = false;
    } else {
        // adiciona classe de sucesso
        setSuccessFor(nameU);
        errorName = true;
    }

    if(emailValue === '') {
        setErrorFor(email);
        errorEmail = false;
    } else if(!ValidateEmail(emailValue)) {
        setErrorFor(email);
        errorEmail = false;
    } else {
        setSuccessFor(email);
        errorEmail = true;
    }

    if(usernameValue === '' || usernameValue.length <= 3) {
        setErrorFor(username);
        errorUsername = false;
    } else {
        setSuccessFor(username);
        errorUsername = true;
    }

    if(passValue === '' || passValue.length <= 5){
        setErrorFor(pass);
        errorPass = false;
    } else {
        setSuccessFor(pass);
        errorPass = true;
    }

    return errorValidation();
}

function setErrorFor(input) {
    const inputField = input.parentElement; // .input-field
    inputField.className = 'input-field error';
}

function setSuccessFor(input) {
    const inputField = input.parentElement;
    inputField.className = 'input-field success';
}

function ValidateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function errorValidation(){
    if(errorName && errorEmail && errorUsername && errorPass === true ){
        return true;
    } else {
        return false;
    }
}