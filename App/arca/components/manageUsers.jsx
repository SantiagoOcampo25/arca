import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesUsers.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function ManageUsers(){
  return (
    <div className="container-dashboard" style={{ transition: "all 3s" }}>
      <Sidebar />
      <Navbar />
        <div className="body-contenido">
            <div className="con-ges-users">
                <div className="con-all-users">
                    <a href="neg_dat_pres_U_index.php">
                        Ver todos los usuarios
                        <img src="./assets/img/icons/flecha-pequena-derecha 1.svg" alt="" />
                    </a>
                </div>
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
                            <label class="titleform" id="label-fom">Selecciona el tipo de rol que deseas buscar.</label>
                            <input type="hidden" value="2" name="type" />
                            <div className="formfloating">
                            <label htmlFor="floatingSelect">Tipo de cuenta</label>
                            <select className="formselect" id="floatingSelect" aria-label="" required name="rol">
                                    <option hidden />
                                    <option value="1">Administrador</option>
                                    <option value="2">Secretaria</option>
                                    <option value="3">Doctor</option>
                                    <option value="4">Paciente</option>
                            </select>
                            </div>
                        </div>
                        <div className="fooform">
                            <button type="submit">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className="con-form">
                    <form action="neg_dat_pres_U_index.php" method="get" className="FormUsers">
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

                                <div className="formfloating">
                                <label htmlFor="floatingSelect">Tipo de documento</label>
                                    <select className="formselect" id="floatingSelect" aria-label="" name="tdd" required>
                                            <option hidden />
                                            <option value="CC">Cédula de ciudadanía</option>
                                            <option value="CE">Cédula de extranjería</option>
                                            <option value="TI">Tarjeta de identidad</option>
                                        </select>
                                </div>

                                <div className="formfloating">
                                    <label htmlFor="floatingPassword">Documento</label>
                                    <input type="number" className="form-control" id="floatingPassword" placeholder="Documento" name="document" required />
                                </div>
                        </div>
                        <div className="fooform">
                            <button type="submit">Buscar</button>
                        </div>
                    </form>
                </div>

                <div className="con-form-new">
                    <form action="./neg_dat_U_store.php" method="post" className="FormUsers">
                        <input type="hidden" name="type_register" value="2" />
                        <div className="headform">
                            <div className="titleform">
                                <h3>Agregar Usuario</h3>
                            </div>
                            <div className="icon-form">
                                <img src="./assets/img/icons/agregar-usuario 1.svg" alt="" />
                            </div>
                        </div>
                        <div className="bodyform">
                                <div className="formfloating">
                                <label htmlFor="floatingSelect">Tipo de cuenta</label>
                                    <select className="formselect" id="floatingSelect" aria-label="" required name="usuarioRol">
                                            <option hidden />
                                            <option value="1">Administrador</option>
                                            <option value="2">Secretaria</option>
                                            <option value="3">Doctor</option>
                                            <option value="4">Paciente</option>
                                        </select>
                                </div>

                                <div className="formfloating">
                                <label htmlFor="floatingSelect">Especialidad</label>
                                    <select className="formselect" id="floatingSelect" aria-label="" required name="especialidad">
                                            <option hidden />
                                            <option value="0">Ninguna</option>
                                            <option value="1">Médico General</option>
                                            <option value="2">Psicologo</option>
                                            <option value="4">Root</option>
                                    </select>
                                </div>
                            <div className="formfloating">
                                <label htmlFor="floatingSelect">Tipo de documento</label>
                                <select className="formselect" id="floatingSelect" aria-label="" name="fk_pk_tipo_documentoU" required>
                                        <option hidden />
                                        <option value="CC">Cédula de ciudadanía</option>
                                        <option value="CE">Cédula de extranjería</option>
                                        <option value="TI">Tarjeta de identidad</option>
                                </select>
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Número de documento</label>
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Documento" name="documento" required />
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Primer nombre</label>
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Documento" name="pr_name" required />
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Segundo nombre</label>
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Documento" name="sg_name" />
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Primer apellido</label>
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Documento" name="pr_apellido" required />
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Segundo apellido</label>
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Documento" name="sg_apellido" />
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Fecha nacimiento</label>
                                <input type="date" className="form-control" id="floatingPassword" placeholder="Documento" name="fecha_naci" required />
                            </div>

                            <div className="formfloating">
                                <label htmlFor="floatingPassword">Correo electrónico</label>
                                <input type="email" className="form-control" id="floatingPassword" placeholder="Documento" name="correo" required />
                            </div>
                            

                            <div className="formfloating space-btn">
                                <label htmlFor="floatingPassword">Número de celular</label>
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Documento" name="Numcel" required />
                            </div>
                            <div className="fooformm">
                              <button type="submit">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
</div>
  );
}

export default ManageUsers;
