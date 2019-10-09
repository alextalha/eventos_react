import React, { useState } from "react";
import "./usuario-novo.css";
import Navbar from "../../componentes/navbar";
import firebase from "../../config/firebase";
import "firebase/auth";

function UsuarioNovo() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgTipo, setMsgTipo] = useState("");
  const [msg, setMsg] = useState("");
  const [carregando, setCarregando] = useState("");

  function cadastrar() {
    setCarregando(1);

    setMsgTipo(null);
    if (!email || !senha) {
      setMsgTipo("erro");
      setMsg("Você precisa informar o email e senha para fazer o cadastro!");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(resultado => {
        setCarregando(0);
        setMsgTipo("sucesso");
        setMsg(" Você está conectado! &#128526;");
      })
      .catch(erro => {
        setMsgTipo("erro");
        setCarregando(0);
        switch (erro.message) {
          case "Password should be at least 6 characteres!":
            setMsg("A senha deve ter pelo menos 6 caracteres!");
            break;
          case "The email address is already in use by another account.":
            setMsg("Este email já está sendo utilizado por outro usuário");
            break;
          case "The email address is badly formatted.":
            setMsg("O formato do seu email é invalido");
            break;
          default:
            setMsg("Não foi possível cadastrar. Tente novamente mais tarde!");
            break;
        }
      });
  }

  return (
    <>
      <Navbar />
      <div className="form-cadastro">
        <form className="text-center form-login mx-auto mt-5">
          <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

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
            onClick={cadastrar}
            className="btn btn-lg btn-login btn-block mt-3 mb-5 btn-cadastro"
            type="button"
          >
            Cadastrar
          </button>

          {carregando ? (
            <div class="spinner-border text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="msg-login text-black text-center my-5">
              {msgTipo === "sucesso" && (
                <span>
                  <strong>WoW!</strong> Você está conectado! &#128526;
                </span>
              )}
              {msgTipo === "erro" && (
                <span>
                  <strong>Ops!</strong> {msg} &#128546;
                </span>
              )}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default UsuarioNovo;
