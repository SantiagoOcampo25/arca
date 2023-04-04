import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesHorarios.scss";

function Schedules(){
  return (
    <div className="container-dashboard" style={{ transition: "all 3s" }}>
                <Sidebar />
                <Navbar />
        <div className="body-contenido">
            <div className="con-cm-horarios">
                <a href="neg_dat_pres_Ci_index.php" className="flecha-cm">Ver todas los horarios
                    <img src="./assets/img/icons/flecha-pequena-derecha 1.svg" alt="De clic aqu\xED para ver todas las citas medicas" />
                </a>
                <div className="con-new-cm">
                    <div className="con-cm">
                        <div className="title-cm">Agregar horario.
                            <a href="" className="agregar-cm">
                                <img src="./assets/img/icons/agregar.svg" alt="" />
                            </a>
                        </div>
                        <div className="info-resp-cm">
                            <input type="text" name="resp-cm" autoComplete="off" required />
                            <label htmlFor="resp-cm" className="label-cm">
                                <span className="span-cm">
                                    Informacion del responsable de la cita.
                                </span>
                        </label></div>
                        <div className="info-doc">
                            <div className="especialidad-doc">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="fk_pk_tipo_documentoU" required>
                                        <option value="0">Ninguna</option>
                                        <option value="1">Medico General</option>
                                        <option value="2">Psicologo</option>
                                    </select>
                                    <label htmlFor="floatingSelect">especialidad</label>
                                    <span className="ico-input ico-input-select"><img src="./assets/img/icons/desplegable.svg" alt="" /></span>
                                </div>          
                            </div>
                            <div className="name-doc">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="" required>
                                        <option value="0">1923938762 - Santiago Flores Gomez</option>
                                        <option value="1">1923938762 - Santiago Flores Gomez</option>
                                        <option value="2">1923938762 - Santiago Flores Gomez</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Doctor</label>
                                    <span className="ico-input ico-input-select"><img src="./assets/img/icons/desplegable.svg" alt="" /></span>
                                </div>       
                            </div>
                            <div className="consultorio-doc">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="" required>
                                        <option value="0">13</option>
                                        <option value="1">18</option>
                                        <option value="2">21</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Consultorio</label>
                                    <span className="ico-input ico-input-select"><img src="./assets/img/icons/desplegable.svg" alt="" /></span>
                                </div> 
                            </div>
                        </div>
                        <div className="info-resp-cm">
                            <input type="text" name="resp-cm" autoComplete="off" required />
                            <label htmlFor="resp-cm" className="label-cm">
                                <span className="span-cm">
                                    Informacion del responsable de la cita.
                                </span>
                        </label></div>
                        <div className="con-hora-agendamiento">
                            <div className="semana-agendamiento">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="" required>
                                            <option value="0">13 Febrero 2023 - 18 Febrero 2023</option>
                                            <option value="1">13 Febrero 2023 - 18 Febrero 2023</option>
                                            <option value="2">13 Febrero 2023 - 18 Febrero 2023</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Semana de agendamiento</label>
                                        <span className="ico-input ico-input-select"><img src="./assets/img/icons/desplegable.svg" alt="" /></span>
                                    </div>
                            </div>
                            <div className="horario-agendamiento">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="" required>
                                            <option value="0">Mañana (8 am - 11 am)</option>
                                            <option value="1">Mañana (8 am - 11 am)</option>
                                            <option value="2">Mañana (8 am - 11 am)</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Horario</label>
                                        <span className="ico-input ico-input-select"><img src="./assets/img/icons/desplegable.svg" alt="" /></span>
                                    </div>
                            </div>
                        </div>
                        <div className="con-btn-cm">
                            <input id="btn-cm" type="submit" value="Registrar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
  );
}

export default Schedules;