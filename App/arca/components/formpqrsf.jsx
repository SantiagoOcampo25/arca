import React from "react";
import { Link } from "react-router-dom"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/main.scss";
import "../assets/css/pqrs.scss";

function Formpqrsf(){
    return (
        <div className="body-form-ba">
        <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="fk_pk_tipo_documentoU" required>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="CE">Cédula de extranjería</option>
            </select>
            <label htmlFor="floatingSelect">Tipo de documento</label>
        </div>

        <div className="form-floating">
            <input type="number" className="form-control number-input" id="floatingInput" placeholder="N\xFAmero de documento" name="docuemnt" required />
            <label htmlFor="floatingInput">Número de documento</label>
        </div>
        
        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputValue" placeholder="Primer nombre" name="pr_name" required />
            <label htmlFor="floatingInputValue">Primer nombre</label>
        </div>

        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputValue" placeholder="Segundo nombre" name="sg_name" />
            <label htmlFor="floatingInputValue">Segundo nombre</label>
        </div>

        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputValue" placeholder="Primer apellido" name="pr_apellido" required />
            <label htmlFor="floatingInputValue">Primer apellido</label>
        </div>

        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputValue" placeholder="Segundo apellido" name="sg_apellido" />
            <label htmlFor="floatingInputValue">Segundo apellido</label>
        </div>

        <div className="form-floating">
            <input type="number" className="form-control number-input" id="floatingInput" placeholder="Celular" name="phonenum" required />
            <label htmlFor="floatingInput">Celular</label>
        </div>

        <div className="form-floating">
            <input type="number" className="form-control number-input" id="floatingInput" placeholder="Telefono Fijo" name="telnum" />
            <label htmlFor="floatingInput">Teléfono fijo</label>
        </div>

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInputValue" placeholder="Correo electronico" name="correo" required />
            <label htmlFor="floatingInputValue">Email</label>
        </div>
    </div>
    );
}

export default Formpqrsf;