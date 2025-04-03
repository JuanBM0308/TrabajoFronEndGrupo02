// DetallesCliente.js
import React from "react";
import user from "../../../assets/imgs/fi-sr-user.svg";
import phone from "../../../assets/imgs/fi-sr-smartphone.svg";
import mail from "../../../assets/imgs/fi-sr-envelope.svg";
import "./DetallesCliente.css";

const DetallesCliente = () => {
  return (
    <div className="cliente-container">
      <h4 className="section-title centered-title">Detalle de Cliente</h4>
      <div className="cliente-item">
        <img src={user} alt="cliente" />
        <span>Cliente</span>
        <strong>Muhammed Nabeel</strong>
      </div>
      <div className="cliente-item">
        <img src={mail} alt="email" />
        <span>Email</span>
        <a href="mailto:nabeel@gmail.com">nabeel@gmail.com</a>
      </div>
      <div className="cliente-item">
        <img src={phone} alt="phone" />
        <span>Phone</span>
        <strong>+917034985827</strong>
      </div>
    </div>
  );
};

export default DetallesCliente;
