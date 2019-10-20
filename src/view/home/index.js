import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import EventoCard from "../../componentes/evento-card";
function Home() {
  return (
    <>
      <Navbar />
      <h1>{useSelector(state => state.usuarioEmail)}</h1>
      <h1>{useSelector(state => state.usuarioLogado)}</h1>
      <div class="row">
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
        <EventoCard />
      </div>
    </>
  );
}

export default Home;
