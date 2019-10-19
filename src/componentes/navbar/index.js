import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg">
      <i class="far fa-smile-wink text-white fa-2x ml-4"></i>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(Página atual)</span>
            </Link>
          </li>

          {useSelector(state => state.usuarioLogado) == 0 ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarioNovo">
                  Cadastrar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/evento-cadastro">
                  Publicar Evento
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Meus Eventos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() =>
                    dispatch({ type: "LOG_OUT", usuarioEmail: "" })
                  }
                >
                  Sair
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
