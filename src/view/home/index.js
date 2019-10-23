import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar";
import EventoCard from "../../componentes/evento-card";
import firebase from "../../config/firebase";

function Home({ match }) {
  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  let listaeventos = [];
  const usuarioEmail = useSelector(state => state.usuarioEmail);

  useEffect(() => {
    if (match.params.parametro) {
      // filtrar apenas os meus
      firebase
        .firestore()
        .collection("eventos")
        .where("usuario", "==", usuarioEmail)
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

          setEventos(listaeventos);
        });
    } else {
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

          setEventos(listaeventos);
        });
    }
  });

  return (
    <>
      <Navbar />

      <div className="row p-5">
        <h2 className="mx-auto p-5">Eventos Publicados</h2>
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
