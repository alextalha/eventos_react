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
      <div className="container">
        <div className="row">
          <h1> Evento Detalhes</h1>
        </div>
      </div>
    </>
  );
}

export default eventoDetalhes;
