import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Formschedules from "./formschedulesdashboard";
import Formusersdashboard from "./formusersdashboard";

function Dashboard(){
  return (
    <div className="container-dashboard" style={{transition: "all 3s"}}>
                <Sidebar />
                <Navbar />
        <div className="body-contenido">
            <div className="con-dashboard-admin">
                <div className="con-horarios-admin">
                    <Formschedules />
                    <Formusersdashboard />
                </div>
                <div className="con-pqrsf">
                    <div className="title-pqrsf">PQRSF recientes</div>
                        <div className="body-spqrsf">
                            <div className="img-spqrsf"><img src='../assets/img/sin_citas.svg' alt='' /></div>
                            <div className="text-spqrsf">No tienes pqrsf sin responder</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
