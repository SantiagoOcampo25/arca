import React from "react";
import "../assets/css/register.scss";
import "../assets/css/main.scss";

function FormRegister() {
    return (
        <div className="body-register">
            <form onSubmit={''} method="post" className="form-register">
                <input type="hidden" name="type_register" value="1" />
                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="fk_pk_tipo_documentoU" required>
                        <option value="CC">Cédula de ciudadanía</option>
                        <option value="TI">Tarjeta de identidad</option>
                        <option value="CE">Cédula de extranjería</option>
                    </select>
                    <label htmlFor="floatingSelect">Tipo de documento</label>
                    <span className="ico-input ico-input-select"><img src="../assets/img/icons/desplegable.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control number-input" id="floatingInputValue" placeholder="Numero de identidad" name="documento" maxLength={10} required />
                    <label htmlFor="floatingInputValue">Número de identidad</label>
                    <span className="ico-input"><img src="./assets/img/icons/id-insignia 1.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Primer nombre" id="pr_name" name="pr_name" pattern="[a-zA-Z]+" maxLength={15} required />
                    <label htmlFor="pr_name">Primer nombre</label>
                    <span className="ico-input"><img src="../assets/img/icons/retratoIn.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Segundo nombre" id="sg_name" name="sg_name" pattern="[a-zA-Z]+" maxLength={15} />
                    <label htmlFor="sg_name">Segundo nombre</label>
                    <span className="ico-input"><img src="../assets/img/icons/retratoIn.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Primer apellido" id="pr_apellido" name="pr_apellido" pattern="[a-zA-Z]+" maxLength={15} required />
                    <label htmlFor="pr_apellido">Primer apellido</label>
                    <span className="ico-input"><img src="../assets/img/icons/retratoIn.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Segundo apellido" id="sg_apellido" name="sg_apellido" pattern="[a-zA-Z]+" maxLength={15} />
                    <label htmlFor="sg_apellido">Segundo apellido</label>
                    <span className="ico-input"><img src="../assets/img/icons/retratoIn.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="date" className="form-control date-input" id="floatingInputValue" placeholder="Fecha de nacimiento" name="fecha_naci" required />
                    <label htmlFor="floatingInputValue">Fecha de nacimiento</label>
                    <span className="ico-input"><img src="../assets/img/icons/date.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control number-input" id="floatingInputValue" placeholder="Telefono" name="Numcel" maxLength={10} required />
                    <label htmlFor="floatingInputValue">Telefono</label>
                    <span className="ico-input"><img src="../assets/img/icons/telefono.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputValue" placeholder="Direccion de residencia" name="direccionU" required />
                    <label htmlFor="floatingInputValue">Dirección de residencia</label>
                    <span className="ico-input"><img src="../assets/img/icons/location.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInputValue" placeholder="Correo electronico" name="correo" required />
                    <label htmlFor="floatingInputValue">Correo electrónico</label>
                    <span className="ico-input"><img src="../assets/img/icons/sobre 1.svg" alt="" /></span>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInputValue" placeholder="Contraseña" name="claveU" maxLength={15} required />
                    <label htmlFor="floatingInputValue">Contraseña</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInputValue" placeholder="Confirmar Contraseña" maxLength={15} />
                    <label htmlFor="floatingInputValue">Confirmar Contraseña</label>
                </div>

                <div className="con-btn-register">
                    <input id="btn-register" type="submit" value="Registrarse" />
                </div>
            </form>
        </div>
    );
}

export default FormRegister;