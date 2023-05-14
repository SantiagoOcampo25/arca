import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";

function PQRSF() {
  const [pqrsfList, setPqrsfList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/api/pres_neg_dat_admin_pqrsf_show_.php")
      .then(response => {
        setPqrsfList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {pqrsfList.length > 0 ? (
        <div className="con-info-pqrsf">
          {pqrsfList.map((pqrsf) => (
            <div className="info-pqrsf" key={pqrsf.numRadicacion}>
              <div className="head-info-pqrsf">Numero radicacion</div>
              <div className="info-head-pqrsf">{pqrsf.numRadicacion}</div>
              <div className="body-info-pqrsf">
                <input type="hidden" name="tipopqrsf" value={pqrsf.TipoPQRSF} />
                <div className="time-info-pqrsf">{pqrsf.tipopqrsf}</div>
              </div>
              <div className="date-info-pqrsf">
                <div className="title-date-info-pqrsf">
                  <div className="title-date-pqrsf">{pqrsf.fechapqrsf}</div>
                </div>
                <div className="text-date-info-pqrsf">
                  <div className="text-date">Año</div>
                  <div className="text-date">Mes</div>
                  <div className="text-date">Día</div>
                </div>
              </div>
              <Link className="footer-info-pqrsf" to="">
                Ver más
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="body-spqrsf">
          <div className="img-spqrsf">
            <img src="../assets/img/sin_citas.svg" alt="" />
          </div>
          <div className="text-spqrsf">No hay PQRSF sin responder</div>
        </div>
      )}
    </div>
  );
}

export default PQRSF;



