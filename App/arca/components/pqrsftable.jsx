import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";


function Pqrsftable() {
    return (
        <div className="container-dashboard" style={{ transition: "all 3s" }}>
            <Sidebar />
            <Navbar />
            <div className="body-contenido">
                <div className="con-table">
                    <div className="info-table">
                        <div className="section-1">
                            <h3>PQRSF</h3>
                        </div>
                        <div className="section-2">
                            <Link to="/Dashboard">Volver
                                <img src="./assets/img/icons/flecha-pequena-derecha 1.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="con-table-u">
                        <table id="table-co" className="display responsive nowrap">
                            <thead>
                                <tr>
                                    <th className="th-first" data-priority="2">#</th>
                                    <th>Tipo</th>
                                    <th>Documento</th>
                                    <th>Estado</th>
                                    <th className="th-end">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-secondary">
                                    <td className="th-first">1</td>
                                    <td>Queja</td>
                                    <td>CC 1029387634</td>
                                    <td>Respondido</td>
                                    <td id="last-clm" className="con-actions th-end" style={{ gridTemplateColumns: "100%" }}>
                                        <a href="">
                                            <img src="../assets/img/icons/eye.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="row-secondary">
                                    <td className="th-first">2</td>
                                    <td>Felicitacion</td>
                                    <td>CC 1022387239</td>
                                    <td>En tramite</td>
                                    <td id="last-clm" className="con-actions th-end" style={{ gridTemplateColumns: "100%" }}>
                                        <a href="">
                                            <img src="../assets/img/icons/eye.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="row-secondary">
                                    <td className="th-first">3</td>
                                    <td>Reclamo</td>
                                    <td>CC 1333387239</td>
                                    <td>Respondido</td>
                                    <td id="last-clm" className="con-actions th-end" style={{ gridTemplateColumns: "100%" }}>
                                        <a href="">
                                            <img src="../assets/img/icons/eye.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="row-secondary">
                                    <td className="th-first">4</td>
                                    <td>Sugerencia</td>
                                    <td>CC 1022327369</td>
                                    <td>En tramite</td>
                                    <td id="last-clm" className="con-actions th-end" style={{ gridTemplateColumns: "100%" }}>
                                        <a href="">
                                            <img src="../assets/img/icons/eye.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pqrsftable;