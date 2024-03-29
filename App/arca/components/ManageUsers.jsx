import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesUsers.scss";
import FormSearchRoles from "./FormSearchRoles";
import FormSearchUsers from "./formsearchusers";
import FormNewUser from "./formnewuser";

function ManageUsers(){
  return (
            <div className="con-ges-users">
                <div className="con-all-users">
                    <Link to="">
                        Ver todos los usuarios
                        <img src="../assets/img/icons/flecha-pequena-derecha 1.svg" alt="" />
                    </Link>
                </div>
                <FormSearchRoles />
                <FormSearchUsers />
                <FormNewUser />
            </div>
  );
}

export default ManageUsers;
