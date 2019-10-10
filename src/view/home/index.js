import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
function Home() {
  return (
    <>
      <Navbar />
      <h1>{useSelector(state => state.usuarioEmail)}</h1>
      <h1>{useSelector(state => state.usuarioLogado)}</h1>
    </>
  );
}

export default Home;
