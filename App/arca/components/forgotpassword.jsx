import React from "react";
import { Link } from "react-router-dom"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import imagen from "../assets/img/Imagen.png";
import sobreinput from "../assets/img/icons/sobre 1.svg";
import "../assets/css/main.scss";
import "../assets/css/recoveryPass.scss";

function Forgotpassword(){
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
                <h3>Ingresa los datos correspondientes y en un momento recuperaras tu contraseña.</h3>
            </div>
			<div className="con-form-recoverypass">
				<form onSubmit={''} className="form-recovery">
					<div className="form-floating">
              <input type="email" className="form-control" id="correoElectronico_U" placeholder="Correo electronico" name="correoElectronico_U" required />
              <label for="correoElectronico_U">Correo electrónico</label>
              <span className="ico-input"><img src={sobreinput} alt="Imagen input correo" /></span>
          </div>
					<div className="con-buttons">
						<div className="con-btn-back">
                    		<Link to="/Login"><input id="btn-back" type="button" value="Volver"></input></Link>
            </div>
						<div className="con-btn-recovery">
                    		<Link to="/Enterpin"><input id="btn-recovery" type="submit" value="Aceptar"></input></Link>
            </div>
					</div>
				</form>
			</div>
    </div>
	</div>
  );
}

export default Forgotpassword;
