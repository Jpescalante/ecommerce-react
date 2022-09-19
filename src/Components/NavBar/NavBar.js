import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(idCategory) {
  return (
    <header className="header mb-5">
      <nav className="navbar navbar-expand-lg navbar-dark m-6">
        <div className="container-fluid">
        <NavLink className="navbar-brand logo nav-link active" aria-current="page"to={"/"}>
            Mercado de Bebidas
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
         
          <NavLink to={`category/Gin`} className="nav-link">
            <li>Gin</li>
          </NavLink>
          <NavLink to={`category/Whisky`} className="nav-link">
            <li>Whisky</li>
          </NavLink>
          <NavLink to={`category/Otras`} className="nav-link">
            <li>Otros Destilados</li>
          </NavLink>
          <CartWidget />
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
