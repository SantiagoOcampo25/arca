import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/editProfile.scss";

function ProfileBody() {
    return (
        <div className="body-edit-profile">
            <div className="con-data-user">
                <div className="name-edit-title">Información personal</div>
                <div className="basic-data-user">
                    <div className="icon-data-user">
                        <img src="../assets/img/icons/retrato.svg" alt="EPS" />
                        <img src="../assets/img/icons/nacimiento.svg" alt="Fecha de nacimiento" />
                        <img src="../assets/img/icons/ubicacion.svg" alt="Direccion de residencia" />
                    </div>
                    <div className="text-data-user">
                        <div className="data-user">
                            <div className="data-user-text">EPS</div>
                            <div className="data-user-text">SURA</div>
                        </div>
                        <div className="data-user">
                            <div className="data-user-text">Fecha de nacimiento</div>
                            <div className="data-user-text">2004-07-10</div>
                        </div>
                        <div className="data-user">
                            <div className="data-user-text">Dirección de residencia</div>
                            <div className="data-user-text">Cr7 #10-18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="con-data-user">
                <div className="name-edit-title">Contacto</div>
                <div className="basic-data-user">
                    <div className="icon-data-user">
                        <img src="../assets/img/icons/sobre 1.svg" alt="Correo electronico" />
                        <img src="../assets/img/icons/telefono.svg" alt="Telefono" />
                    </div>
                    <div className="text-data-user">
                        <div className="data-user">
                            <div className="data-user-text">Teléfono</div>
                            <div className="data-user-text">3178404133</div>
                        </div>
                        <div className="data-user">
                            <div className="data-user-text">Correo electrónico</div>
                            <div className="data-user-text">ocamposandoval2@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBody;