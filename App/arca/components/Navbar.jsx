import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/components.scss";
import "../assets/css/main.scss";

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('/');
  }

  return (
    <div className="navbar-dash">
      <div className="colm-dash-1">
        <h2>Bienvenido a Arca</h2>
        <h6>Hola usuario, comienza a explorar</h6>
      </div>
      <div className="colm-dash-2">
        <h4>Santiago Ocampo</h4>
        <Link onClick={handleLogout}>Cerrar Sesión</Link>
      </div>
      <div className="colm-dash-r-3">
        <img src="../assets/img/profileImages/0.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
