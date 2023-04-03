import { Link } from "react-router-dom"; 
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";

function Formusersdashboard(){
    return(
        <div className="con-form-users">
            <div className="head-form">Usuarios</div>
                <div className="body-form">Gestiona tus usuarios aqui.</div>
                    <Link to="/ManageUsers" className="flecha-users">Gestionar
                        <img src="./assets/img/icons/flecha-pequena-derecha 1.svg" alt="De clic aquí para ingresar al módulo de PQRSF" />
                    </Link>
                    <a className="info-users">
                        <img className="img-info-users" src="./assets/img/icons/programador 1.svg" alt="" />
                    </a>
        </div>
    );
}

export default Formusersdashboard;