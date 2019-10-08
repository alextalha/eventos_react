import React, { useState } from "react";
import "./index.css";
import firebase from "../../config/firebase";
import "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgTipo, setMsgTipo] = useState("");

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(resultado => setMsgTipo("sucesso"))
      .catch(error => setMsgTipo("erro"));
  }

  return (
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Logar
          </h1>
        </div>
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
        />
        <input
          onChange={e => setSenha(e.target.value)}
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
        />

        <button
          onClick={logar}
          className="btn btn-lg btn-login btn-block"
          type="button"
        >
          Logar
        </button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo == "sucesso" && (
            <span>
              <strong>WoW!</strong> Você está conectado! &#128526;
            </span>
          )}
          {msgTipo == "erro" && (
            <span>
              <strong>Ops!</strong> Verifique se a senha ou usuário estão
              corretos! &#128546;
            </span>
          )}
        </div>

        <div className="opcoes-login mt-5 text-center">
          <a href="#" className="mx-2">
            Recuperar Senha
          </a>
          <span className="text-white">&#9733;</span>
          <a href="#" className="mx-2">
            Quero Cadastrar
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
