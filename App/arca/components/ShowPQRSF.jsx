import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";

function ShowPQRSF({ ShowDashboardPQRSF }) {
    return(
        <div className="con-info-pqrsf">
            {ShowDashboardPQRSF.map((pqrsf) => (
              <div className="info-pqrsf" key={pqrsf.NumRadicacion}>
                <div className="head-info-pqrsf">Numero radicacion</div>
                <div className="info-head-pqrsf">{pqrsf.NumRadicacion}</div>
                <div className="body-info-pqrsf">
                  <div className="time-info-pqrsf">{pqrsf.TipoPQRSF}</div>
                </div>
                <div className="date-info-pqrsf">
                  <div className="title-date-info-pqrsf">
                    <div className="title-date-pqrsf">{pqrsf.Fecha}</div>
                  </div>
                  <div className="text-date-info-pqrsf">
                    <div className="text-date">Año</div>
                    <div className="text-date">Mes</div>
                    <div className="text-date">Día</div>
                  </div>
                </div>
                <Link className="footer-info-pqrsf" to="">Ver más</Link>
              </div>
            ))}
          </div>
    );
}

export default ShowPQRSF;