import React, { useState } from "react";
import "./index.css";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../componentes/navbar";

import firebase from "../../config/firebase";
import "firebase/auth";

import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgTipo, setMsgTipo] = useState("");

  const dispatch = useDispatch();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(resultado => {
        setMsgTipo("sucesso");
        setTimeout(
          () => dispatch({ type: "LOG_IN", usuarioEmail: email }),
          2000
        );
      })
      .catch(error => setMsgTipo("erro"));
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="login-content d-flex align-items-center">
        {useSelector(state => state.usuarioLogado) > 0 ? (
          <Redirect to="/" />
        ) : null}
        <form className="form-signin mx-auto">
          <div className="text-center mb-4">
            <i class="far fa-smile-wink text-white fa-5x"></i>
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
            <Link to="usuariorecuperarsenha" className="mx-2">
              Recuperar Senha
            </Link>
            <span className="text-white">&#9733;</span>
            <Link to="/usuarioNovo" href="#" className="mx-2">
              Quero Cadastrar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
