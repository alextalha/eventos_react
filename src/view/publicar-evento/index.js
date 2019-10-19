import React, { useState } from "react";
import "./publicar-evento.css";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../componentes/navbar";

import firebase from "../../config/firebase";
import "firebase/auth";

function PublicarEvento() {
  return (
    <>
      <Navbar />
      <h1>Publicar Evento </h1>
    </>
  );
}

export default PublicarEvento;
