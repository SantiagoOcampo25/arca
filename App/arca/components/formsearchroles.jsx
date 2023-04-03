import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesUsers.scss";

function Fromsearchroles(){
    return(
        <div className="con-form">
                    <form action="neg_dat_pres_U_index.php" method="get" className="FormUsers">
                        <div className="headform">
                            <div className="titleform">
                                <h3>Buscar por roles.</h3>
                            </div>
                            <div className="icon-form">
                                <img src="./assets/img/icons/busqueda.svg" alt="" />
                            </div>
                        </div>
                        <div className="bodyform">
                            <label className="titleform" id="label-fom">Selecciona el tipo de rol que deseas buscar.</label>
                            <input type="hidden" value="2" name="type" />
                            <div className="form-floating">
                            <select className="form-select" id="floatingSelect" aria-label="" required name="rol">
                                    <option hidden />
                                    <option value="1">Administrador</option>
                                    <option value="2">Secretaria</option>
                                    <option value="3">Doctor</option>
                                    <option value="4">Paciente</option>
                            </select>
                            <label htmlFor="floatingSelect">Tipo de cuenta</label>
                            </div>
                        </div>
                        <div className="fooform">
                            <button type="submit">Buscar</button>
                        </div>
                    </form>
        </div>
    );
}

export default Fromsearchroles;