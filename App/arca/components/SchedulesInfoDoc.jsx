import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesHorarios.scss";

function SchedulesInfoDoc() {
    return (
        <div className="info-doc">
            <div className="especialidad-doc">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="fk_pk_tipo_documentoU" required>
                        <option value="0">Ninguna</option>
                        <option value="1">Medico General</option>
                        <option value="2">Psicologo</option>
                    </select>
                    <label htmlFor="floatingSelect">especialidad</label>
                    <span className="ico-input ico-input-select"><img src="../assets/img/icons/desplegable.svg" alt="" /></span>
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
                    <span className="ico-input ico-input-select"><img src="../assets/img/icons/desplegable.svg" alt="" /></span>
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
                    <span className="ico-input ico-input-select"><img src="../assets/img/icons/desplegable.svg" alt="" /></span>
                </div>
            </div>
        </div>
    );
}

export default SchedulesInfoDoc;