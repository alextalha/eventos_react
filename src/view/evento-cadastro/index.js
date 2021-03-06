import React, { useState } from "react";
import "./evento-cadastro.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../componentes/navbar";

import firebase from "../../config/firebase";
import "firebase/auth";

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState();
  const [titulo, setTitulo] = useState();
  const [tipo, setTipo] = useState();
  const [descricao, setDescricao] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [foto, setFoto] = useState();
  const usuarioEmail = useSelector(state => state.usuarioEmail);

  const [carregando, setCarregando] = useState();
  const storage = firebase.storage();
  const db = firebase.firestore();

  function cadastrar() {
    setMsgTipo(null);
    setCarregando(1);

    try {
      storage
        .ref(`imagens/${foto.name}`)
        .put(foto)
        .then(() => {
          // se tudo der ok cadastramos os dados
          db.collection("eventos")
            .add({
              titulo: titulo,
              tipo: tipo,
              descricao: descricao,
              data: data,
              hora: hora,
              usuario: usuarioEmail,
              visualizacoes: 0,
              foto: foto.name,
              publico: 1,
              criacao: new Date()
            })
            .then(() => {
              setMsgTipo("sucesso");
              setCarregando(0);
            });
        })
        .catch(error => {
          setMsgTipo("erro");
          console.log(error);
        });
    } catch (error) {
      setCarregando(0);
      setMsgTipo("erro");
    }
  }

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
            <input
              onChange={e => setTitulo(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Tipo de Evento</label>
            <select
              onChange={e => setTipo(e.target.value)}
              className="form-control"
            >
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
            <textarea
              onChange={e => setDescricao(e.target.value)}
              className="form-control"
              rows="3"
            />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data</label>
              <input
                onChange={e => setData(e.target.value)}
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label>Hora</label>
              <input
                onChange={e => setHora(e.target.value)}
                type="time"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Imagem</label>
            <input
              onChange={e => setFoto(e.target.files[0])}
              type="file"
              className="form-control"
            />
          </div>

          <div className="row">
            {carregando > 0 ? (
              <div className="spinner-border text-danger mx-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                onClick={cadastrar}
                className="btn btn-lg btn-login btn-block mt-3 mb-5 btn-cadastro"
                type="button"
              >
                Publicar Evento
              </button>
            )}
          </div>
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
