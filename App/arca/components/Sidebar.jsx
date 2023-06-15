import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/helpCenter.scss";
import "../assets/css/main.scss";
import menuimg from "../assets/img/icons/menu-burger.svg";
import arcalogo from "../assets/img/icons/logo.svg";
import ItemsSidebar from "./ItemsSidebar";
import dashboardimg from "../assets/img/icons/ico_apps-font_vio}.svg";
import estetoscopioimg from "../assets/img/icons/ico_stethoscope.svg";
import usersimg from "../assets/img/icons/users-alt-free-icon-font.svg";
import documentimg from "../assets/img/icons/ico_document-signed.svg";
import userprofile from "../assets/img/icons/ico_user-free-icon-font (1).svg";
import help from "../assets/img/icons/help.svg";

function Sidebar(props) {
  const [estadoSidebar, setEstadoSidebar] = useState(false);
  const [estadoMenu, setEstadoMenu] = useState(false);

  const bodyClassName = estadoSidebar ? "body-dashboard body-dashboard-s" : "body-dashboard";
  const btnSidebar = estadoSidebar ? "btn-des-sidebar btn-des-sidebar-s" : "btn-des-sidebar";
  const imgBtn = estadoSidebar ? "img-btn img-btn-s" : "img-btn";
  const imgSrc = estadoSidebar ? "../assets/img/icons/angle-double-small-right-free-icon-font.svg" : "../assets/img/icons/angle-double-small-left-free-icon-font.svg";
  const arcaImg = estadoSidebar ? "arca-s" : "arca";
  const conHelp = estadoSidebar ? "con-help-center con-help-center-s" : "con-help-center";


  function click() {
    setEstadoSidebar(!estadoSidebar);
    { props.onClick() }
  };

  const bodyClassNameMenu = estadoMenu ? "body-dashboard body-dashboard-m hidden" : "body-dashboard";
  const btnMenu = estadoMenu ? "con-sidebar-a con-sidebar-m" : "con-sidebar-a";

  function menu() {
    setEstadoMenu(!estadoMenu);
  };

  return (
    <>
      <div className="head-sidebar">
        <div className="menu" onClick={menu}>
          <img src={menuimg} alt="Menu" />
        </div>
        <Link className={arcaImg} to="">
          <img src={arcalogo} alt="Arca logo" id="arca-logo" />
        </Link>
      </div>
      <div className={`${bodyClassName} ${bodyClassNameMenu}`}>
        <div className="con-item">
          <ItemsSidebar
            to="/Dashboard"
            imgSrc={dashboardimg}
            alt="Dashboard"
            name="Dashboard"
          />
          <ItemsSidebar
            to="/Dashboard/Schedules"
            imgSrc={estetoscopioimg}
            alt="Horarios"
            name="Horarios"
          />
          <ItemsSidebar
            to="/Dashboard/ManageUsers"
            imgSrc={usersimg}
            alt="Gestión de usuarios"
            name="Gestión de usuarios"
          />
          <ItemsSidebar
            to="/Dashboard/Pqrsftable"
            imgSrc={documentimg}
            alt="PQRSF"
            name="PQRSF"
          />
          <ItemsSidebar name="Ajustes" />
          <ItemsSidebar
            to="/Dashboard/Profile"
            imgSrc={userprofile}
            alt="Perfil de usuario"
            name="Perfil de usuario"
          />
        </div>
        <div className="con-foo-sidebar">
          <div className={conHelp}>
            <div className="head-help">
              <img src={help} alt="Ayuda" />
            </div>
            <h3>Centro de ayuda</h3>
            <p>Tienes problemas con Arca. Resuelve tus dudas aqui.</p>
            <button className="help-center-btn"><Link to="/HelpCenter">Ir a centro de ayuda</Link></button>
          </div>
        </div>
      </div>
      <div className={btnSidebar} onClick={click}>
        <img className={imgBtn} src={imgSrc} alt="" />
      </div>
      <div className={btnMenu} onClick={menu}>
      </div>
    </>
  );
}
export default Sidebar;
