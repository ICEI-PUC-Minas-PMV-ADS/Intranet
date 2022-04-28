import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpacenetLogo from "/Users/rafaeljordao/Documents/Intranet/Intranet/src/assets/SpacenetLogo.png"


const LoginFormField = () => {

  // Criando os estados para manipular Email e Senha
  // Manipulating states of email and password
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  // Tranformando o User em um objeto com suas propriedades para salvar no localStorage
  // Creating the user object with his own propertys to save in localStorage
  const user = {
    email: login,
    password: password
  }

  // useNavigate serve para ativar a mudança de rotas
  // useNavigate active the changing routes
  const navigate = useNavigate();

  // Funçao responsável por capturar os dados inseridos no formulário quando o botao for pressionado
  // Function responsible for handling all data in the form field when the button is pressed
  const handleSubmit = (e) => {
    e.preventDefault()
    setLogin(e.target.value)
    setPassword(e.target.value)
    setLogin('')
    setPassword('')
    //useNavigate here
    navigate('/homepage')

    localStorage.setItem('userData', JSON.stringify(user))
  }

  // Ambas as funcões abaixo sao responsaveis por captar as mudanças nos inputs
  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (

    <div className="App">

      <div className="Login">
        <div>
          <section className="one-fourth" id="html">
            <img style={{maxWidth: '40%', minWidth:'300px', padding:'4rem'}} src={SpacenetLogo} />
          </section>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChangeLogin}
            value={login}
            type="email" />
          <br />
          <input
            onChange={handleChangePassword}
            value={password}
            type="password" />
          <br />
          <button disabled={!login || !password}>Entrar</button>
        </form>
      </div>

    </div>
  );
}

export default LoginFormField;





