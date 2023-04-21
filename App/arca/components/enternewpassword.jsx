import React from "react";
import { Link } from "react-router-dom"; 
import imagen from "../assets/img/Imagen.png";
import "../assets/css/main.scss";
import "../assets/css/enterPin.scss";
import "../assets/css/titles.scss";

function EnterNewPassword(){
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
                <h3>Muy bien, ahora digita tu nueva contraseña y estarias listo para iniciar sesion.</h3>
            </div>
            <div className="con-form-pin">
	            <form onSubmit={''} className="form-pin"> 
                    <div className="form-floating">
                        <input type="password" className="form-control" id="contrasena" placeholder="Contraseña" name="contrasena" maxlength="15" required />
                        <label htmlFor="contrasena">Contraseña</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="confirmar_contrasena" placeholder="Confirmar Contraseña" name="confirmar_contrasena" maxlength="15" />

                        <label htmlFor="confirmar_contrasena">Confirmar Contraseña</label>
                    </div>
                    <div className="con-buttons">
						<div className="con-btn-back">
                            <Link to="/Login"><button id="btn-back" type="button">Volver</button></Link>
                		</div>
						<div className="con-btn-recovery">
                    		<Link to="/Login"><button id="btn-recovery" type="submit" >Actualizar</button></Link>
                		</div>
					</div> 
	            </form>
            </div>
        </div>
    </div>
  );
}

export default EnterNewPassword;
