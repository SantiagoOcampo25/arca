import React, { useState } from "react";
import "../assets/css/components.scss";
import "../assets/css/main.scss";
import "../assets/css/dashboardAdministrador.scss";
import FormSchedules from "./FormSchedulesDashboard";
import FormUsersDashboard from "./FormUsersDashboard";
import ShowPQRSF from "./ShowPQRSF";

function Dashboard() {
  return (
    <div className="con-dashboard-admin">
      <div className="con-horarios-admin">
        <FormSchedules />
        <FormUsersDashboard />
      </div>
      <div className="con-pqrsf">
        <div className="title-pqrsf">PQRSF recientes</div>
        <div className="body-pqrsf"><ShowPQRSF /></div>
      </div>
    </div>
  );
}

export default Dashboard;


