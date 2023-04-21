import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesUsers.scss";

function FormNewUser(){
    return(
        <div className="conform-new">
                    <form onSubmit={''} method="post" className="FormUsers">
                        <div className="headform">
                            <div className="titleform">
                                <h3>Agregar Usuario</h3>
                            </div>
                            <div className="icon-form">
                                <img src="../assets/img/icons/agregar-usuario 1.svg" alt="" />
                            </div>
                        </div>
                        <div className="bodyform">
                                <div className="form-floating">
                                    <select className="form-select" id="floating-Select" aria-label="" required name="usuarioRol">
                                            <option hidden />
                                            <option value="1">Administrador</option>
                                            <option value="2">Secretaria</option>
                                            <option value="3">Doctor</option>
                                            <option value="4">Paciente</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Tipo de cuenta</label>
                                </div>

                                <div className="form-floating">
                                    <select className="form-select" id="floating-Select" aria-label="" required name="especialidad">
                                            <option hidden />
                                            <option value="0">Ninguna</option>
                                            <option value="1">Médico General</option>
                                            <option value="2">Psicologo</option>
                                            <option value="4">Root</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Especialidad</label>
                                </div>
                            <div className="form-floating">
                                <select className="form-select" id="floating-Select" aria-label="" name="fk_pk_tipo_documentoU" required>
                                        <option hidden />
                                        <option value="CC">Cédula de ciudadanía</option>
                                        <option value="CE">Cédula de extranjería</option>
                                        <option value="TI">Tarjeta de identidad</option>
                                </select>
                                <label htmlFor="floatingSelect">Tipo de documento</label>
                            </div>

                            <div className="form-floating">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Documento" name="documento" required />
                                <label htmlFor="floatingPassword">Número de documento</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Documento" name="pr_name" required />
                                <label htmlFor="floatingPassword">Nombre completo</label>
                            </div>
                            <div className="form-floating">
                                <input type="date" className="form-control" id="floatingPassword" placeholder="Documento" name="fecha_naci" required />
                                <label htmlFor="floatingPassword">Fecha nacimiento</label>
                            </div>

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingPassword" placeholder="Documento" name="correo" required />
                                <label htmlFor="floatingPassword">Correo electrónico</label>
                            </div>
                
                            <div className="form-floating">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Documento" name="Numcel" required />
                                <label htmlFor="floatingPassword">Número de celular</label>
                            </div>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Documento" name="Numcel" required />
                                <label htmlFor="floatingPassword">Direccion</label>
                            </div>
                        </div>
                        <div className="fooform">
                              <button type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
    );
}

export default FormNewUser;