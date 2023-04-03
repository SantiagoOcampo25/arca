import React from "react";
import { Link } from "react-router-dom"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/main.scss";
import "../assets/css/pqrs.scss";
import "../assets/css/formfloating.scss";
import Formpqrsf from "./formpqrsf";
import Detailpqrsf from "./detailpqrsf";

function Pqrsf(){
  return (
<>
    <div className="con-form-pqrs">
        <form action="./neg_dat_pqrsf_store.php" encType="multipart/form-data" method="post">
        <section className="head-form-">
            <h2>Bienvenido al modulo de PQRSF</h2>
            <p>Este formulario esta destinado a presentar peticiones de cada usuario, responda los campos necesarios para hacer un mejor seguimiento de su petición.</p>
        </section>
        <section className="form-ba">
            <div className="head-form-">
                <h4>Información del afectado</h4>
                <hr />
            </div>
            <Formpqrsf />
        </section>
            <Detailpqrsf />
            <section className="btn-foo-form">
                <Link to="/">Volver</Link>
                <button type="submit">Enviar</button>
            </section>
        </form>
    </div>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel" />
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
        <div className="modal-body">
          <div className="con-img-alert">
              <img src="../assets/img/icons/iconalertmodal.svg" alt="" />
          </div>
          <div className="con-alert-modal"><p>Adjunte solo archivos PDF para los soportes.</p></div>
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Pqrsf;
