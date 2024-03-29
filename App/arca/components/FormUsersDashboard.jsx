import { Link } from "react-router-dom";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";

function FormUsersDashboard() {
    return (
        <div className="con-form-users">
            <div className="head-form">Usuarios</div>
            <div className="body-form">Gestiona tus usuarios aqui.</div>
            <Link to="/Dashboard/ManageUsers" className="flecha-users">Gestionar
                <img src="../assets/img/icons/flecha-pequena-derecha 1.svg" alt="De clic aquí para ingresar al módulo de PQRSF" />
            </Link>
            <div className="info-users">
                <img className="img-info-users" src="../assets/img/icons/programador 1.svg" alt="" />
            </div>
        </div>
    );
}

export default FormUsersDashboard;