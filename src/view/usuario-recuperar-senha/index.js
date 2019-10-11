import React, { useState } from "react";
import "./usuario-recuperar-senha.css";
import { Link } from "react-router-dom";

import firebase from "../../config/firebase";
import "firebase/auth";
import Navbar from "../../componentes/navbar";

function UsuarioRecuperarSenha() {
  return (
    <>
      <Navbar />
      <div className="form-cadastro">
        <form className="text-center form-login mx-auto mt-5">
          <h1 className>Recuperar Senha</h1>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Email"
          />
        </form>
      </div>
    </>
  );
}

export default UsuarioRecuperarSenha;
