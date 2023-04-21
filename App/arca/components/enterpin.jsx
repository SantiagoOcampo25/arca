import React from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/img/Imagen.png";
import retrato from "../assets/img/icons/retratoIn.svg"
import "../assets/css/main.scss";
import "../assets/css/enterPin.scss";
import "../assets/css/formfloating.scss";
import "../assets/css/titles.scss";

function EnterPin() {
    return (
        <div className="con-recovery-password">
            <div className="con-img-pass">
                <img src={imagen} alt="Imagen" />
            </div>
            <div className="head-recovery">
                <div className="head-1">
                    <h2><span>¿</span>Olvidaste tu contraseña<span>?</span></h2>
                </div>
                <div className="head-2">
                    <h3>Al correo recibirás un código de recuperación de contraseña, digítalo y vamos al siguiente paso.</h3>
                </div>
                <div className="con-form-pin">
                    <form onSubmit={''} className="form-pin">
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="PIN de recuperacion" id="pin" name="pin" required />
                            <label htmlFor="pin">PIN de recuperacion</label>
                            <span className="ico-input"><img src={retrato} alt="Imagen retrato" /></span>
                        </div>
                        <div className="con-buttons">
                            <div className="con-btn-back">
                                <Link to="/Login"><input id="btn-recovery" type="button" value="Volver"></input></Link>
                            </div>
                            <div className="con-btn-recovery">
                                <Link to="/Enternewpassword"><input id="btn-recovery" type="submit" value="Aceptar"></input></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnterPin;
