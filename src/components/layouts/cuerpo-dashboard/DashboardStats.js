// src/components/layouts/cuerpo-dashboard/DashboardStats.js
import React from "react";
import { ReactComponent as ArrowUp } from "../../../assets/imgs/image.svg";
import { ReactComponent as ArrowDown } from "../../../assets/imgs/icon.svg";
import "./DashboardStats.css";

const DashboardStats = () => {
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <h4 className="stat-label"><b>Usuarios totales</b></h4>
        <div className="stat-main">
          <span className="stat-value"><b>200</b></span>
          <span className="stat-badge up">
            <ArrowUp className="arrow-icon" />
            <span><b>16% (30 days)</b></span>
          </span>
        </div>
      </div>

      <div className="stat-card">
        <h4 className="stat-label"><b>Nuevos Usuarios</b></h4>
        <div className="stat-main">
          <span className="stat-value"><b>45</b></span>
          <span className="stat-badge down">
            <ArrowDown className="arrow-icon" />
            <span><b>2% (30 days)</b></span>
          </span>
        </div>
      </div>

      <div className="stat-card">
        <h4 className="stat-label"><b>Total de ganancias</b></h4>
        <div className="stat-main">
          <span className="stat-value"><b>$465</b></span>
          <span className="stat-badge up">
            <ArrowUp className="arrow-icon" />
            <span><b>7% (30 days)</b></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;

