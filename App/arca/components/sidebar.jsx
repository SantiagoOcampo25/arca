import React from "react";
import { Link } from "react-router-dom"; 
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/components.scss";
import "../assets/css/helpCenter.scss";
import "../assets/css/main.scss";
import menuimg from "../assets/img/icons/menu-burger.svg";
import arcalogo from "../assets/img/icons/logo.svg";
import dashboardimg from "../assets/img/icons/ico_apps-font_vio}.svg";
import estetoscopioimg from "../assets/img/icons/ico_stethoscope.svg";
import usersimg from "../assets/img/icons/users-alt-free-icon-font.svg";
import documentimg from "../assets/img/icons/ico_document-signed.svg";
import userprofile from "../assets/img/icons/ico_user-free-icon-font (1).svg";
import help from "../assets/img/icons/help.svg";


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
        itemHelp.style.display = "none";
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
        itemHelp.style.display = "grid";
      }, 500);
    }
  }

  function menu() {
    const sidebar = document.querySelector('.body-dashboard');
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
        
        <Link className="item-sidebar item-active" to="/Dashboard">
            <div className="color-item color-item-active"></div>
            <div className="con-ico-item">
                <img src={dashboardimg} alt="Dashboard" />
            </div>
            <div className="name-item">Dashboard</div>
        </Link>
        <a className="item-sidebar" href="#">
            <div className="color-item"></div>
            <div className="con-ico-item">
                <img src={estetoscopioimg} alt="" />
            </div>
            <div className="name-item">Horarios</div>
        </a>
        
        <Link className="item-sidebar" to="/ManageUsers">
            <div className="color-item"></div>
            <div className="con-ico-item">
                <img src={usersimg} alt="Gestion de usuarios" />
            </div>
            <div className="name-item">Gestion usuarios</div>
        </Link>

        <a className="item-sidebar" href="#">
            <div className="color-item"></div>
            <div className="con-ico-item">
                <img src={documentimg} alt="" />
            </div>
            <div className="name-item">PQRSF</div>
        </a>
        <a className="item-sidebar section-item">
            <div className="color-item"></div>
            <div className="con-ico-item"></div>
            <div className="name-item">Ajustes</div>
        </a>

        <a className="item-sidebar item-perfil" href="#">
            <div className="color-item"></div>
            <div className="con-ico-item">
                <img src={userprofile} alt="Perfil Usuario" />
            </div>
            <div className="name-item">Perfil</div>
        </a>
        <a className="item-sidebar item-seg" href="#">
            <div className="color-item"></div>
            <div className="con-ico-item">
                <img src="#" alt="" />
            </div>
            <div className="name-item">Seguridad</div>
        </a>
    </div>
    <div className="con-foo-sidebar">
        <div className="con-help-center">
            <div className="head-help">
                <img src={help} alt="Ayuda" />
            </div>
            <h3>Centro de ayuda</h3>
            <p>Tienes problemas con Arca. Resuelve tus dudas aqui.</p>
            <Link to="/HelpCenter">Ir a centro de ayuda</Link>
        </div>
        <a className="item-help" href="">
            <div className="color-item"></div>
        </a>
    </div>
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
