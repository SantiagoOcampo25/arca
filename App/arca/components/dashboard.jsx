import React, { useState } from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";
import FormSchedulesDashboard from "./FormSchedulesDashboard";
import FormUsersDashboard from "./FormUsersDashboard";
import ShowPQRSF from "./ShowPQRSF";

function Dashboard(props) {
  const [showpqrsf, setshowpqrsf] = useState(true);
  let pqrsfContent;

  if (showpqrsf) {
    pqrsfContent = <ShowPQRSF ShowDashboardPQRSF={props.ShowDashboardPQRSF} />;
  } else {
    pqrsfContent = (
      <>
        <div className="img-spqrsf">
          <img src="../assets/img/sin_citas.svg" alt="" />
        </div>
        <div className="text-spqrsf">No tienes pqrsf sin responder</div>
      </>
    );
  }
  return (
    <div className="con-dashboard-admin">
      <div className="con-horarios-admin">
        <FormSchedulesDashboard />
        <FormUsersDashboard />
      </div>
      <div className="con-pqrsf">
        <div className="title-pqrsf">PQRSF recientes</div>
        <div className="body-pqrsf">{pqrsfContent}</div>
      </div>
    </div>
  );
}

export default Dashboard;


