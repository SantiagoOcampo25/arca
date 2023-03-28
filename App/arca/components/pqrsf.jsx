import React from "react";
import { Link } from "react-router-dom"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/main.scss";
import "../assets/css/pqrs.scss";

function Pqrsf(){
  return (
    <><div className="con-form-pqrs">
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
            <div className="body-form-ba">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="fk_pk_tipo_documentoU" required>
                    <option value="CC">Cédula de ciudadanía</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CE">Cédula de extranjería</option>
                    </select>
                    <label htmlFor="floatingSelect">Tipo de documento</label>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control number-input" id="floatingInput" placeholder="N\xFAmero de documento" name="docuemnt" required />
                    <label htmlFor="floatingInput">Número de documento</label>
                </div>
                
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputValue" placeholder="Primer nombre" name="pr_name" required />
                    <label htmlFor="floatingInputValue">Primer nombre</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputValue" placeholder="Segundo nombre" name="sg_name" />
                    <label htmlFor="floatingInputValue">Segundo nombre</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputValue" placeholder="Primer apellido" name="pr_apellido" required />
                    <label htmlFor="floatingInputValue">Primer apellido</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputValue" placeholder="Segundo apellido" name="sg_apellido" />
                    <label htmlFor="floatingInputValue">Segundo apellido</label>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control number-input" id="floatingInput" placeholder="Celular" name="phonenum" required />
                    <label htmlFor="floatingInput">Celular</label>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control number-input" id="floatingInput" placeholder="Telefono Fijo" name="telnum" />
                    <label htmlFor="floatingInput">Teléfono fijo</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="Correo electronico" name="correo" required />
                    <label htmlFor="floatingInputValue">Email</label>
                </div>
            </div>
        </section>
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
                      <input type="file" accept=".pdf" id="file" className="btn btn-primary" name="file" onChange={event => { fileValidation(); selectFilePqrsf(); }} />

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
        <section className="btn-foo-form">
            <Link to="/">Volver</Link>
            <input type="submit" value="Enviar"></input>
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
  </div></>
  );
}

export default Pqrsf;
