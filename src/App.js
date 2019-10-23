import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../src/store/";

/* Páginas */
import Login from "../src/view/login";
import UsuarioNovo from "../src/view/usuario-novo";
import Home from "../src/view/home";
import UsuarioRecuperarSenha from "../src/view/usuario-recuperar-senha";
import PublicarEvento from "../src/view/publicar-evento";
import EventoCadastro from "../src/view/evento-cadastro";
import EventoDetalhes from "../src/view/evento-detalhes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/usuarioNovo" exact={true} component={UsuarioNovo} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/eventos/:parametro" component={Home} />
        <Route
          path="/usuariorecuperarsenha"
          exact={true}
          component={UsuarioRecuperarSenha}
        />
        <Route
          path="/publicar-evento"
          exact={true}
          component={PublicarEvento}
        />
        <Route
          path="/evento-cadastro"
          exact={true}
          component={EventoCadastro}
        />

        <Route
          path="/evento-detalhes"
          exact={true}
          component={EventoDetalhes}
        />
      </Router>
    </Provider>
  );
}

export default App;
