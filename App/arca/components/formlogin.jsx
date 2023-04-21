import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.scss";
import "../assets/css/main.scss";
import desplegable from "../assets/img/icons/desplegable.svg";
import insignia from "../assets/img/icons/id-insignia 1.svg";

function Formlogin(){
    return (
        <div className="body-login">
            <form onSubmit={''} method="post">
              <div className="con-form-lo">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="tdd" required>
                    <option value="CC">Cédula de ciudadanía</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CE">Cédula de extranjería</option>
                  </select>
                  <label htmlFor="floatingSelect">Tipo de documento</label>
                  <span className="ico-input ico-input-select"><img src={desplegable} alt="" /></span>
                </div>
                <div className="form-floating">
                  <input type="number" className="form-control number-input" id="floatingInputValue" placeholder="Número de identidad" name="document" required />
                  <label htmlFor="floatingInputValue">Número de identidad</label>
                  <span className="ico-input"><img src={insignia} alt="" /></span>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="" placeholder="Contraseña" name="password" required />
                  <label htmlFor="floatingInputValue">Contraseña</label>
                </div>
              </div>
              <div className="con-ol">
                <Link to="/Forgotpassword">¿Olvidaste tu contraseña?</Link>
              </div>
              <div className="con-btns">
                <div className="btn-back"><Link to="/">Volver</Link></div>
                <div className="btn-enter"><Link to="/Dashboard"><button type="submit">Ingresar</button></Link></div>
              </div>
            </form>
          </div>
    );
}
export default Formlogin;