import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../src/store/";

/* Páginas */
import Login from "../src/view/login";
import UsuarioNovo from "../src/view/usuario-novo";
import Home from "../src/view/home";
import UsuarioRecuperarSenha from "../src/view/usuario-recuperar-senha";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/usuarioNovo" exact={true} component={UsuarioNovo} />
        <Route path="/" exact={true} component={Home} />
        <Route
          path="/usuariorecuperarsenha"
          exact={true}
          component={UsuarioRecuperarSenha}
        />
      </Router>
    </Provider>
  );
}

export default App;
