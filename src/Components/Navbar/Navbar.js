import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu navbar-dark nav-item">
                <li>
                  <a className="dropdown-item text-muted" href="#">
                    Gins
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-muted" href="#">
                    Tonicas
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contacto</a>
            </li>
          </ul>
          <CartWidget className="nav-item"></CartWidget>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
