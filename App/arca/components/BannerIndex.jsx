import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/index.scss'
import '../assets/css/main.scss'

function Banner() {
  return (
    <div className="con-banner">
      <header>
        <nav>
          <Link to="" className="item-menu">
            <img src="../assets/img/Logos/Logo TEXT.svg" alt="" />
          </Link>
          <Link to="#Nosotros" className="item-menu">
            Nosotros
          </Link>
          <Link to="#Servicios" className="item-menu">
            Servicios
          </Link>
          <Link to="#Contacto" className="item-menu">
            Contacto
          </Link>
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
          <Link to="/login">Reserva Cita</Link>
          <Link to="#Contacto" className="con-ba">
            Contactanos
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Banner;
