const form = document.getElementById('form')
const fields = document.querySelectorAll("[required]")

function validateField(field) {
    // lógica para verificar se existe erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError;
    }

    // mensagens customizadas para o span
    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Required field"
            },
            email: {
                valueMissing: "Required email",
                typeMismatch: "Invalid email"
            },
            password: {
                valueMissing: "Enter a password"
            }
        }
        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
            setErrorFor(field)
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
            setSuccessFor(field)
        }
    }

    return function() {
        
        const error = verifyErrors()

        if (Error) {
            const message = customMessage(error)

            setCustomMessage(message)
        } else {
            setCustomMessage()
        }
    }
}

function customValidation(e) {
    const field = e.target
    const validation = validateField(field)

    validation()
}

for ( field of fields ) {
    field.addEventListener("invalid", e => {
        // elimina o bubble
        e.preventDefault()
        customValidation(e)
    })
    field.addEventListener("blur", customValidation)
}

form.addEventListener('submit', (e) => {
    // não envia o formulário
    e.preventDefault();
})

function setErrorFor(input) {
    const inputField = input.parentElement; // .input-field
    inputField.className = 'input-field';
}

function setSuccessFor(input) {
    const inputField = input.parentElement;
    inputField.className = 'input-field success';
}