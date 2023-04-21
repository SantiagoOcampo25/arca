import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/editProfile.scss";

function ProfileHead() {
    return (
            <div className="head-edit-profile">
                <div className="con-edit-photo">
                    <img src="../assets/img/profileImages/0.png" alt="Foto de perfil de usuario" className="img-edit-photo" />
                    <Link to="" className="btn-edit-photo">
                        <img src="../assets/img/icons/photo.svg" alt="Editar foto de perfil de usuario" />
                    </Link>
                </div>
                <div className="con-edit-user">
                    <div className="name-edit-user">
                        <div className="name-edit-title">Santiago Ocampo</div>
                        <div className="name-edit-text">C.C. 10298736745</div>
                    </div>
                    <Link to="" className="btn-edit-user">
                        <Link to="" style={{ textDecoration: "none" }}><div className="btn-edit-title">Editar</div></Link>
                    </Link>
                </div>
            </div>
    );
}

export default ProfileHead;