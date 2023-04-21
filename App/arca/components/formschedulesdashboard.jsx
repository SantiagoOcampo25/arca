import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";

function FormSchedulesDashboard() {
    return (
        <div className="con-form-horarios-admin">
            <div className="head-form">Horarios</div>
            <div className="body-form">Programa la disponibilidad de los doctores.</div>
            <div className="foo-form">
                <button><Link to="/Dashboard/Schedules" style={{ color: "inherit", textDecoration: "none" }}>Agendar</Link></button>
            </div>
        </div>
    );
}

export default FormSchedulesDashboard;