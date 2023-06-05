import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { LoginUser } from "../api/LoginUser";
import { TokenContext } from './Context';
import { Link } from "react-router-dom";
import "../assets/css/login.scss";
import "../assets/css/main.scss";
import "../assets/css/pqrs.scss";
import "../assets/css/bootstrap.scss";
import desplegable from "../assets/img/icons/desplegable.svg";
import insignia from "../assets/img/icons/id-insignia 1.svg";

function FormLogin() {
  const navigate = useNavigate();
  const { setToken } = useContext(TokenContext);


  const [formData, setFormData] = useState({
    tdd: '',
    document: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await LoginUser(formData);
      const token = response.token;
      setToken(token);
      navigate('/Dashboard');
    } catch(error) {
      console.log(error);
    }
  };
  return (
    <div className="body-login">
      <form onSubmit={handleSubmit}>
        <div className="con-form-lo">
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="tdd" value={formData.tdd} onChange={handleInputChange} required>
              <option value="" disabled defaultValue>Seleccione un tipo de documento</option>
              <option value="CC">Cédula de ciudadanía</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="CE">Cédula de extranjería</option>
            </select>
            <label htmlFor="floatingSelect">Tipo de documento</label>
            <span className="ico-input ico-input-select"><img src={desplegable} alt="" /></span>
          </div>
          <div className="form-floating">
            <input type="number" className="form-control number-input" id="floatingInputValue" placeholder="Número de identidad" name="document" value={formData.document} onChange={handleInputChange} required />
            <label htmlFor="floatingInputValue">Número de identidad</label>
            <span className="ico-input"><img src={insignia} alt="" /></span>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="" placeholder="Contraseña" name="password" value={formData.password} onChange={handleInputChange} required />
            <label htmlFor="floatingInputValue">Contraseña</label>
          </div>
        </div>
        <div className="con-ol">
          <Link to="/Forgotpassword">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="con-btns">
          <div className="btn-back"><Link to="/">Volver</Link></div>
          <div className="btn-enter"><button type="submit">Ingresar</button></div>
        </div>
      </form>
    </div>
  );
}
export default FormLogin;