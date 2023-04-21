import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/index.scss'
import '../assets/css/main.scss'

function Banner() {
  return (
    <div className="con-banner">
      <header>
        <nav>
          <a href="./index.html" className="item-menu">
            <img src="./assets/img/Logos/Logo TEXT.svg" alt="" />
          </a>
          <a href="#Nosotros" className="item-menu">
            Nosotros
          </a>
          <a href="#Servicios" className="item-menu">
            Servicios
          </a>
          <a href="#Contacto" className="item-menu">
            Contacto
          </a>
          <Link to="/login" className="item-menu btn-menu">
            Ingresar
          </Link>
        </nav>
      </header>
      <div className="banner">
        <section className="top-banner">
          <h1>Por un mundo inclusivo</h1>
          <p>
            Fomentamos la inclusión a partir de la obtención de condiciones
            óptimas de salud a través de programas de rehabilitación dirigidos
            por un equipo especializado.
          </p>
        </section>
        <section className="bottom-banner">
          <a href="./pres_login.php">Reserva Cita</a>
          <a href="#Contacto" className="con-ba">
            Contactanos
          </a>
        </section>
      </div>
    </div>
  );
}

export default Banner;
