import React from "react";
import "../assets/css/login.scss";
import "../assets/css/main.scss";
import "../assets/css/formfloating.scss";
import loginImg from "../assets/img/Img-login.png";
import Formlogin from "./formlogin";

function Login(){
  return (
      <div className="con-login">
        <div className="sect-login">
          <div className="head-login">
            <div className="sect-1">
              <h2>Inicia sesión<span>.</span></h2>
            </div>
            <div className="sect-2">
              <p>¿No tienes cuenta?</p> <a href="./pres_register.php">Registrate</a>
            </div>
          </div>
          <Formlogin />
        </div>
        <div className="sect-img">
          <img src={loginImg} alt="" />
        </div>
      </div>
  );
}

export default Login;
