import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
import ManageUsers from "../components/ManageUsers";
import Schedules from "../components/schedules";
import Pqrsftable from "../components/pqrsftable";
import Profile from "../components/profile";

const datosPQRSF = [
    {
        idUser: '1',
        TipoPQRSF: 'Felicitacion',
        Documento: 'CC 1022387239'
    },
    {
        idUser: '2',
        TipoPQRSF: 'Queja',
        Documento: 'CC 1025587239'
    },
    {
        idUser: '3',
        TipoPQRSF: 'Reclamo',
        Documento: 'CC 1029812239'
    }
]
const ShowDashboardPQRSF = [
    {
        NumRadicacion: '1',
        TipoPQRSF: 'Felicitacion',
        Fecha: '2021-07-10'
    },
    {
        NumRadicacion: '2',
        TipoPQRSF: 'Queja',
        Fecha: '2022-05-13'
    },
    {
        NumRadicacion: '3',
        TipoPQRSF: 'Reclamo',
        Fecha: '2021-09-20'
    }
];

function Router() {
    const [estadoSidebar, setEstadoSidebar] = useState(false);
    const containerClassNameS = estadoSidebar ? "container-dashboard-s" : "container-dashboard";
    function click() {
        setEstadoSidebar(!estadoSidebar);
    };
    return (
        <div className={containerClassNameS} style={{ transition: "1s all" }}>
            <Sidebar onClick={click} />
            <Navbar />
            <div className="body-contenido">
                <Routes>
                    <Route path="/" element={<Dashboard ShowDashboardPQRSF={ShowDashboardPQRSF}/>} />
                    <Route path="/ManageUsers" element={<ManageUsers />} />
                    <Route path="/Schedules" element={<Schedules />} />
                    <Route path="/Pqrsftable" element={<Pqrsftable datosPQRSF={datosPQRSF} />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}
export default Router;
