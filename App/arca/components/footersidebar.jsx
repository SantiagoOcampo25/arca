import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/components.scss";
import "../assets/css/helpCenter.scss";
import "../assets/css/main.scss";
import help from "../assets/img/icons/help.svg";

function Footersidebar(){
    return(
        <div className="con-foo-sidebar">
        <div className="con-help-center">
            <div className="head-help">
                <img src={help} alt="Ayuda" />
            </div>
            <h3>Centro de ayuda</h3>
            <p>Tienes problemas con Arca. Resuelve tus dudas aqui.</p>
            <button className="help-center-btn"><Link to="/HelpCenter">Ir a centro de ayuda</Link></button>
        </div>
    </div>
    );
}

export default Footersidebar;