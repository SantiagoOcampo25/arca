import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import ManageUsers from "../components/ManageUsers";
import Schedules from "../components/schedules";
import PqrsfTable from "../components/PqrsfTable";
import Profile from "../components/Profile";


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
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/ManageUsers" element={<ManageUsers />} />
                    <Route path="/Schedules" element={<Schedules />} />
                    <Route path="/PqrsfTable" element={<PqrsfTable datosPQRSF={datosPQRSF} />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}
export default Router;