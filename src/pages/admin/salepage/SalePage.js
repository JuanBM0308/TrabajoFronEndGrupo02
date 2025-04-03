import "./salepage.css";

import React from "react";
import NavbarAdmin from "../../../components/layouts/navbar-admin/Navbar-admin";
import Orden from '../../../components/layouts/cuerpo-sale/Orden';
import DetallesCliente from '../../../components/layouts/cuerpo-sale/DetallesCliente';
import ListaCompra from '../../../components/layouts/cuerpo-sale/ListaCompra';

const Salepage = () => {
  return (
    <div className="salepage-container">
      <NavbarAdmin />
      {/* Ruta visual superior */}
      <div className="menuoptions-divisor">
        <h2 className="menuoptions-title">Clientes</h2>
        <h4 className="menuoptions-sub-title purple">Cliente</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#8B8E99"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
        <h5 className="menuoptions-sub-title purple">Venta</h5>
      </div>
      <div className="sale-page">
          <Orden />
          <DetallesCliente />
          <ListaCompra />
      </div>
    </div>
  );
};

export default Salepage;
