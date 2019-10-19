import React, { useState } from "react";
//import "./evento-cadastro.css";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../componentes/navbar";

import firebase from "../../config/firebase";
import "firebase/auth";

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState("");

  return (
    <>
      <Navbar />
      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="mx-auto font-weigth-bold"> Novo Evento </h3>
        </div>

        <form>
          <div className="form-group">
            <label>Título</label>
            <input className="form-control" />
          </div>

          <div className="form-group">
            <label>Tipo de Evento</label>
            <select className="form-control">
              <option disabled selected value>
                ---- Selecione uma tipo ------
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descrição do Evento</label>
            <textarea className="form-control" rows="3" />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Dia</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-6">
              <label>Dia</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label>Título</label>
            <input type="file" className="form-control" />
          </div>

          <button
            className="btn btn-lg btn-login btn-block mt-3 mb-5 btn-cadastro"
            type="button"
          >
            Publicar Evento
          </button>
        </form>

        <div className="msg-login  text-center my-2">
          {msgTipo == "sucesso" && (
            <span>
              <strong>WoW!</strong>Evento Publicado! &#128526;
            </span>
          )}
          {msgTipo == "erro" && (
            <span>
              <strong>Ops!</strong>Não foi possível publicar o evento corretos!
              &#128546;
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default EventoCadastro;
