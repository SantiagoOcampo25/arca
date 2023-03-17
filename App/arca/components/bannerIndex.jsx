import React from "react";
import '../assets/css/index.css'
import '../assets/css/main.css'

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
          <a href="./pres_login.php" className="item-menu btn-menu">
            Ingresar
          </a>
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
