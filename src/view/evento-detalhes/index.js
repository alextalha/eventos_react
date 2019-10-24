import React from "react";
import "./evento-detalhes.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../componentes/navbar";
import firebase from "../../config/firebase";

function eventoDetalhes() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <img
            src="https://via.placeholder.com/150"
            className="img-banner"
            alt="banner"
          />
        </div>

        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h5>
              <strong>Tipo</strong>
            </h5>
            <span className="mt-3">Festa</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5>
              <strong>Data</strong>
            </h5>
            <span className="mt-3">17/11/1983</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-clock fa-2x"> </i>
            <h5>
              <strong>Hora</strong>
            </h5>
            <span className="mt-3">22:30</span>
          </div>
        </div>

        <div className="row box-detalhes mt-5">
          <h5 className="mx-auto">
            <strong>Detalhes do Evento</strong>
          </h5>
          <div className="text-justify pt-3">
            ASASAASDA ASDSADASD ASDASDASDA ASDASDASDAS ASDASDAS A
          </div>
        </div>

        <Link to="" className="fas fa-pen-square fa-3x"></Link>
      </div>
    </>
  );
}

export default eventoDetalhes;
