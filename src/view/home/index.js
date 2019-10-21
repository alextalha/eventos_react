import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import EventoCard from "../../componentes/evento-card";
import firebase from "../../config/firebase";

function Home() {
  const [eventos, setEventos] = useState([]);
  let listaeventos = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection("eventos")
      .get()
      .then(async resultado => {
        await resultado.docs.forEach(doc => {
          listaeventos.push({
            id: doc.id,
            ...doc.data() //spreed
          });
        });
        setEventos(listaeventos);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="row p-3">
        {eventos.map(item => (
          <EventoCard
            id={item.id.toString()}
            img={item.foto}
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
