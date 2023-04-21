import React from "react";
import "../assets/css/main.scss";
import "../assets/css/pqrs.scss";

function Detailpqrsf(){
    return(
        <section className="detail-so">
            <div className="head-form">
                <h4>Detalle de la solicitud</h4>
                <hr />
            </div>
            <div className="body-form-detail">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="fk_pk_tipo_pqrsf" required>
                    <option value="1">Queja</option>
                    <option value="2">Felicitaciones</option>
                    <option value="3">Peticiones</option>
                    <option value="4">Reclamos</option>
                    <option value="5">Sugerencias</option>
                    </select>
                    <label htmlFor="floatingSelect">Tipo de solicitud</label>
                </div>
                <div className="form-floating">
                    <input type="date" className="form-control date-input" id="floatingInputValue" placeholder="Fecha de radicacion" name="fecha_radi" required />
                    <label htmlFor="floatingInputValue">Fecha de radicación</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputValue" placeholder="Motivo del PQRSF" name="motivo" required />
                    <label htmlFor="floatingInputValue">Motivo del PQRSF</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Detalle del PQRSF" name="detalle" required />
                    <label htmlFor="floatingTextarea">Detalle del PQRSF</label>
                  </div>
                  <div className="con-file">
                      <input type="file" accept=".pdf" id="file" className="btn btn-primary" name="file" />

                      <label htmlFor="file" className="label-file">
                        <div className="btn-adj"><p>Adjuntar soporte***</p></div>
                        <div className="icon-clip"><i className="fi fi-rr-clip" /></div>
                        <div className="name-file"><p id="name-file">Seleccionar archivos</p></div>
                        
                      </label>
                  </div>
                  <div className="alert-file">
                      <p>*No es necesario adjuntar soporte.</p>
                      <p>**Solo adjuntar Archivos PDF.</p>
                  </div>
            </div>
        </section>
    );
}

export default Detailpqrsf;