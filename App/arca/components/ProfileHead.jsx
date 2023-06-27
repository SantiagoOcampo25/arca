import React from "react";
import { ProfileData } from "./Profile";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/editProfile.scss";

function ProfileHead() {
  return (
    <ProfileData>
      {(profile) => (
        <div className="head-edit-profile">
          <div className="con-edit-photo">
            <img
              src="../assets/img/profileImages/0.png"
              alt="Foto de perfil de usuario"
              className="img-edit-photo"
            />
            <Link to="" className="btn-edit-photo">
              <img
                src="../assets/img/icons/photo.svg"
                alt="Editar foto de perfil de usuario"
              />
            </Link>
          </div>
          <div className="con-edit-user">
            <div className="name-edit-user">
              {profile.map((data) => (
                <React.Fragment key={data.docUser}>
                  <div className="name-edit-title">
                    {data.pNombre + " " + data.sNombre + " " + data.pApellido + " " + data.sApellido}
                  </div>
                  <div className="name-edit-text">
                    {data.tdd + " " + data.docUser}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <Link to="" className="btn-edit-user">
              <div className="btn-edit-title">Editar</div>
            </Link>
          </div>
        </div>
      )}
    </ProfileData>
  );
}

export default ProfileHead;
