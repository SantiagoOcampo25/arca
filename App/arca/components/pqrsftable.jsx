import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";

function PqrsfTableRow({ datos }) {
    const [estadopqrsf, setEstadopqrsf] = useState(false);
    const text = estadopqrsf ? 'Respondido' : 'En tramite';
    const click = () => {
        setEstadopqrsf(!estadopqrsf);
    };
    return (
        <tr className="row-secondary">
            <td className="th-first">{datos.idUser}</td>
            <td>{datos.TipoPQRSF}</td>
            <td>{datos.Documento}</td>
            <td>{text}</td>
            <td id="last-clm" className="con-actions th-end" style={{ gridTemplateColumns: "100%" }} onClick={click}>
                <a>
                    <img src="../assets/img/icons/eye.svg" alt="" />
                </a>
            </td>
        </tr>
    );
}

function PqrsfTable({ datosPQRSF }) {
    const [estadoSidebar, setEstadoSidebar] = useState(false);
    const containerClassNameS = estadoSidebar ? containerClass : "container-dashboard";
    function click() {
        setEstadoSidebar(!estadoSidebar);
    };
    return (
                <div className="con-table">
                    <div className="info-table">
                        <div className="section-1">
                            <h3>PQRSF</h3>
                        </div>
                        <div className="section-2">
                            <Link to="/Dashboard">
                                Volver
                                <img src="../assets/img/icons/flecha-pequena-derecha 1.svg" alt="" />
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
                                {datosPQRSF.map((datos, index) => (
                                    <PqrsfTableRow key={index} datos={datos} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
    );
}

export default PqrsfTable;
