import React, { useState, useEffect } from "react";
import { GetPqrsfOnTable } from "../api/GetPqrsfOnTable";
import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";

function PqrsfTable() {
    const [pqrsfTable, setPqrsfTable] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await GetPqrsfOnTable();
                setPqrsfTable(response);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, []);

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
                            <th className="th-first" data-priority="2">
                                Radicado
                            </th>
                            <th>Tipo</th>
                            <th>Documento</th>
                            <th>Estado</th>
                            <th className="th-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pqrsfTable.length > 0 ? (
                            pqrsfTable.map((pqrsf) => (
                                <tr className="row-secondary" key={pqrsf.id}>
                                    <td className="th-first">{pqrsf.id}</td>
                                    <td>{pqrsf.TipoPQRSF}</td>
                                    <td>{pqrsf.Documento}</td>
                                    <td>{parseInt(pqrsf.estadoPQRSF) === 1 ? "Respondido" : "En trámite"}</td>
                                    <td
                                        id="last-clm"
                                        className="con-actions th-end"
                                        style={{ gridTemplateColumns: "100%" }}
                                    >
                                        <a>
                                            <img src="../assets/img/icons/eye.svg" alt="" />
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Cargando...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PqrsfTable;
