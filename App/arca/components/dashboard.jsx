import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function Dashboard(){
  return (
    <div className="container-dashboard" style={{transition: "all 3s"}}>
                <Sidebar />
                <Navbar />
        <div className="body-contenido">
            <div className="con-dashboard-admin">
                <div className="con-horarios-admin">
                    <div className="con-form-horarios-admin">
                        <div className="head-form">Horarios</div>
                        <div className="body-form">Programa la disponibilidad de los doctores.</div>
                        <div className="foo-form">
                            <button><a href="pres_gestionHorarios.php"  style={{color: "inherit", textDecoration: "none"}}>Agendar</a></button>
                        </div>
                    </div>
                    <div className="con-form-users">
                        <div className="head-form">Usuarios</div>
                        <div className="body-form">Gestiona tus usuarios aqui.</div>
                        <a href="pres_gestionUs.php" className="flecha-users">Gestionar
                            <img src="./assets/img/icons/flecha-pequena-derecha 1.svg" alt="De clic aquí para ingresar al módulo de PQRSF" />
                        </a>
                        <a href="" className="info-users">
                            <img className="img-info-users" src="./assets/img/icons/programador 1.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="con-pqrsf">
                    <div className="title-pqrsf">PQRSF recientes</div>
                        <div class='body-spqrsf'>
                            <div class='img-spqrsf'><img src='../assets/img/sin_citas.svg' alt='' /></div>
                            <div class='text-spqrsf'>No hay PQRSF sin responder</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
