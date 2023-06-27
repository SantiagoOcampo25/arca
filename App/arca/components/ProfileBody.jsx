import React from "react";
import { ProfileData } from "./Profile";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/editProfile.scss";

function ProfileBody() {
    return (
        <ProfileData>
            {(profile) => (
                <div className="body-edit-profile">
                    {profile.map((data) => (
                        <React.Fragment key={data.docUser}>
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
                                            <div className="data-user-text">{data.eps}</div>
                                        </div>
                                        <div className="data-user">
                                            <div className="data-user-text">Fecha de nacimiento</div>
                                            <div className="data-user-text">{data.fechaNaci}</div>
                                        </div>
                                        <div className="data-user">
                                            <div className="data-user-text">Dirección de residencia</div>
                                            <div className="data-user-text">{data.direccion}</div>
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
                                            <div className="data-user-text">{data.celular}</div>
                                        </div>
                                        <div className="data-user">
                                            <div className="data-user-text">Correo electrónico</div>
                                            <div className="data-user-text">{data.email}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )}
        </ProfileData>
    );
}

export default ProfileBody;