import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesHorarios.scss";
import SchedulesInfoDoc from "./schedulesinfodoc";
import Schedulesdate from "./schedulesdate";

function Schedules() {
    return (
        <div className="con-cm-horarios">
            <Link to="" className="flecha-cm">Ver todas los horarios
                <img src="../assets/img/icons/flecha-pequena-derecha 1.svg" alt="De clic aqui para ver todas las citas medicas" />
            </Link>
            <div className="con-new-cm">
                <div className="con-cm">
                    <div className="title-cm">Agregar horario.
                        <Link to="" className="agregar-cm">
                            <img src="../assets/img/icons/agregar.svg" alt="" />
                        </Link>
                    </div>
                    <div className="info-resp-cm">
                        <span className="span-cm">
                            Informacion del responsable de la cita.
                        </span>
                        <hr />
                    </div>
                    <SchedulesInfoDoc />
                    <div className="info-resp-cm">
                        <span className="span-cm">
                            Informacion del responsable de la cita.
                        </span>
                        <hr />
                    </div>
                    <Schedulesdate />
                    <div className="con-btn-cm">
                        <button id="btn-cm" type="submit">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedules;