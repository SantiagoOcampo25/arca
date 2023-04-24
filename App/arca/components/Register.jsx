import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.scss";
import "../assets/css/main.scss";
import FormRegister from "./formregister";

function Register() {
  return (
    <div className="con-register">
      <div className="con-img-register">
        <img src="../assets/img/Img-register.png" alt="" />
      </div>
      <div className="head-register">
        <div className="head">
          <h2>Registrarse<span>.</span></h2>
        </div>
        <div className="head-2">
          <p>¿Ya tienes cuenta? <Link to="/Login">Inicia sesión.</Link></p>
        </div>
      </div>
      <FormRegister />
    </div>
  );
}

export default Register;
