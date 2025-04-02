// Orden.js
import React from "react";
import calendar from "../../../assets/imgs/fi-sr-calendar.svg";
import card from "../../../assets/imgs/fi-sr-credit-card.svg";
import truck from "../../../assets/imgs/fi-sr-truck-side.svg";
import pencil from "../../../assets/imgs/fi-sr-pencil.svg";
import "./Orden.css";

const Orden = () => {
  return (
    <div className="orden-container">
      <div className="orden-header">
        <h4>Orden #302011</h4>
        <span className="orden-status">Processing</span>
        <img src={pencil} alt="Editar" className="edit-icon" />
      </div>

      <div className="orden-info">
        <div className="orden-item">
          <img src={calendar} alt="calendar" />
          <span>Agregado</span>
          <strong>12 Dec 2022</strong>
        </div>

        <div className="orden-item">
          <img src={card} alt="card" />
          <span>Método de pago</span>
          <strong>Visa</strong>
        </div>

        <div className="orden-item">
          <img src={truck} alt="truck" />
          <span>Método de envío</span>
          <strong>Terrestre</strong>
        </div>
      </div>
    </div>
  );
};

export default Orden;
