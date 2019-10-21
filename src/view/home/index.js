import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import EventoCard from "../../componentes/evento-card";
import firebase from "../../config/firebase";

function Home() {
  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  let listaeventos = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection("eventos")
      .get()
      .then(async resultado => {
        await resultado.docs.forEach(doc => {
          if (doc.data().titulo.indexOf(pesquisa) >= 0) {
            listaeventos.push({
              id: doc.id,
              ...doc.data() //spreed
            });
          }
        });
        console.log(listaeventos);
        setEventos(listaeventos);
      });
  });

  return (
    <>
      <Navbar />

      <div className="row p-5">
        <input
          onChange={e => setPesquisa(e.target.value)}
          type="text"
          className="text-center form-control"
          placeholder="Pesquisar evento pelo título ...."
        />
      </div>
      <div className="row p-3">
        {eventos.map(item => (
          <EventoCard
            key={item.id}
            foto={item.foto}
            titulo={item.titulo}
            descricao={item.descricao}
            visualizacoes={item.visualizacoes}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
