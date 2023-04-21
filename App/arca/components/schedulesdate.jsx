import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesHorarios.scss";

function Schedulesdate() {
    return (
        <div className="con-hora-agendamiento">
            <div className="semana-agendamiento">
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="" required>
                        <option value="0">13 Febrero 2023 - 18 Febrero 2023</option>
                        <option value="1">13 Febrero 2023 - 18 Febrero 2023</option>
                        <option value="2">13 Febrero 2023 - 18 Febrero 2023</option>
                    </select>
                    <label htmlFor="floatingSelect">Semana de agendamiento</label>
                    <span className="ico-input ico-input-select"><img src="../assets/img/icons/desplegable.svg" alt="" /></span>
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
                    <span className="ico-input ico-input-select"><img src="../assets/img/icons/desplegable.svg" alt="" /></span>
                </div>
            </div>
        </div>
    );
}

export default Schedulesdate;