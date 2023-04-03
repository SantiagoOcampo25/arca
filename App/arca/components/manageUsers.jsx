import React from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/gesUsers.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Fromsearchroles from "./formsearchroles";
import Fromsearchusers from "./formsearchusers";
import Fromnewuser from "./formnewuser";

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
                <Fromsearchroles />
                <Fromsearchusers />
                <Fromnewuser />
            </div>
        </div>
</div>
  );
}

export default ManageUsers;
