import React from "react";
import { useState } from "react";
import "../assets/css/components.scss";
import "../assets/css/helpCenter.scss";
import "../assets/css/main.scss";
import menuimg from "../assets/img/icons/menu-burger.svg";
import arcalogo from "../assets/img/icons/logo.svg";
import Itemssidebar from "./itemssidebar";
import Footersidebar from "./footersidebar";
import dashboardimg from "../assets/img/icons/ico_apps-font_vio}.svg";
import estetoscopioimg from "../assets/img/icons/ico_stethoscope.svg";
import usersimg from "../assets/img/icons/users-alt-free-icon-font.svg";
import documentimg from "../assets/img/icons/ico_document-signed.svg";
import userprofile from "../assets/img/icons/ico_user-free-icon-font (1).svg";


function Sidebar(){
  const [estadoMenu, setEstadoMenu] = useState(false);
  function despSidebar() {
    const conDash = document.querySelector('.container-dashboard');
    const sidebar = document.querySelector('.body-dashboard');
    const btnSideBar = document.querySelector('.btn-des-sidebar');
    const imgBtn = document.querySelector('.img-btn');
    const itemHelp = document.querySelector('.item-help');
    const conHelp = document.querySelector('.con-help-center');
    const imgArca = document.getElementById('arca-logo');

    if (sidebar.clientWidth === 70) {
      setTimeout(() => {
        conDash.style.gridTemplateColumns = "260px 1fr";
        sidebar.style.width = "260px";
        btnSideBar.style.left = "245px";
        imgBtn.src = "../assets/img/icons/angle-double-small-right-free-icon-font.svg";
        imgArca.style.width = "85.5px";
        imgArca.style.height = "35px";
        conHelp.style.display = "grid";
      }, 500);
    } else {
      setTimeout(() => {
        conDash.style.gridTemplateColumns = "70px 1fr";
        sidebar.style.width = "70px";
        btnSideBar.style.left = "55px";
        imgBtn.src = "../assets/img/icons/angle-double-small-left-free-icon-font.svg";
        imgArca.style.width = "30px";
        imgArca.style.height = "35px";
        conHelp.style.display = "none";
      }, 500);
    }
  }

  function menu() {
    const sidebar = document.querySelector('.body-dashboard');
    const conDash = document.querySelector('.container-dashboard');
    const btnSideBar = document.querySelector('.btn-des-sidebar');
    const imgBtn = document.querySelector('.img-btn');
    const imgArca = document.getElementById('arca-logo');
    const btnMenu = document.querySelector('.con-sidebar-a');
    const body = document.body;

    sidebar.style.width = "260px";
    conDash.style.gridTemplateColumns = "260px 1fr";
    sidebar.style.width = "260px";
    btnSideBar.style.left = "245px";
    imgBtn.src = "../assets/img/icons/angle-double-small-right-free-icon-font.svg";
    imgArca.style.width = "85.5px";
    imgArca.style.height = "35px";

    if (estadoMenu) {
      sidebar.style.left = "-260px";
      btnMenu.style.left = "-6000px";
      btnMenu.style.right = "auto"; 
      setEstadoMenu(false);
      body.style.overflowY = "auto";
    } else {
      sidebar.style.left = "0px";
      btnMenu.style.left = "auto";
      btnMenu.style.right = "0px";
      setEstadoMenu(true);
      body.style.overflowY = "hidden";
    }
  }
  return (
<>
    <div className="head-sidebar">
        <div className="menu" onClick={menu}>
            <img src={menuimg} alt="Menu" />
        </div>
        <a className="arca" href="#">
            <img src={arcalogo} alt="Arca logo" id="arca-logo" />
        </a>        
    </div>
        <div className="body-dashboard">
          <div className="con-item">
            <Itemssidebar
              to="/Dashboard"
              imgSrc={dashboardimg}
              alt="Dashboard"
              name="Dashboard"
            />
            <Itemssidebar
              to="#"
              imgSrc={estetoscopioimg}
              alt="Horarios"
              name="Horarios"
            />
            <Itemssidebar
              to="/ManageUsers"
              imgSrc={usersimg}
              alt="Gestión de usuarios"
              name="Gestión de usuarios"
            />
            <Itemssidebar
              to="#"
              imgSrc={documentimg}
              alt="PQRSF"
              name="PQRSF"
            />
            <Itemssidebar name="Ajustes" />
            <Itemssidebar
              to="#"
              imgSrc={userprofile}
              alt="Perfil de usuario"
              name="Perfil de usuario"
            />
            <Itemssidebar name="Seguridad" />
        </div>
            <Footersidebar />
        </div>
        <div className="btn-des-sidebar" onClick={despSidebar}>
            <img src="../assets/img/icons/angle-double-small-left-free-icon-font.svg" alt="" className="img-btn" />
        </div>
            <div className="con-sidebar-a" onClick={menu}>
        </div>
</>
  );
}

export default Sidebar;