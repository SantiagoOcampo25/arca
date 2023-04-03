import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";

function Formschedules(){
    return(
        <div className="con-form-horarios-admin">
            <div className="head-form">Horarios</div>
            <div className="body-form">Programa la disponibilidad de los doctores.</div>
            <div className="foo-form">
                <button><a href=""  style={{color: "inherit", textDecoration: "none"}}>Agendar</a></button>
            </div>
        </div>
    );
}

export default Formschedules;