import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Páginas */

import Login from "../src/view/login";
import UsuarioNovo from "../src/view/usuario-novo";

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Login} />
      <Route path="/usuarioNovo" exact={true} component={UsuarioNovo} />
    </Router>
  );
}

export default App;
