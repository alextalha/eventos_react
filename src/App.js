import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Páginas */

import Login from "../src/view/login";
import UsuarioNovo from "../src/view/usuario-novo";
import Home from "../src/view/home";

function App() {
  return (
    <Router>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/usuarioNovo" exact={true} component={UsuarioNovo} />
      <Route path="/" exact={true} component={Home} />
    </Router>
  );
}

export default App;
