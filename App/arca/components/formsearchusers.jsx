import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesUsers.scss";

function Fromsearchusers(){
    return(
        <div className="con-form">
                    <form action="" method="get" className="FormUsers">
                        <div className="headform">
                            <div className="titleform">
                                <h3>Buscar usuario.</h3>
                            </div>
                            <div className="icon-form">
                                <img src="./assets/img/icons/busqueda.svg" alt="" />

                            </div>
                        </div>

                        <div className="bodyform bodyform-users">
                                <input type="hidden" value="3" name="type" />

                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect" aria-label="" name="tdd" required>
                                            <option hidden />
                                            <option value="CC">Cédula de ciudadanía</option>
                                            <option value="CE">Cédula de extranjería</option>
                                            <option value="TI">Tarjeta de identidad</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Tipo de documento</label>
                                </div>

                                <div className="form-floating">
                                    <input type="number" className="form-control" id="floatingPassword" placeholder="Documento" name="document" required />
                                    <label htmlFor="floatingPassword">Documento</label>
                                </div>
                        </div>
                        <div className="fooform">
                            <button type="submit">Buscar</button>
                        </div>
                    </form>
        </div>
    );
}

export default Fromsearchusers;