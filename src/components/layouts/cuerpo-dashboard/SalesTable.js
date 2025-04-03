import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Importar NavLink
import icons from "../../../assets/imgs/icons.svg";
import image from "../../../assets/imgs/img-2.svg";
import img from "../../../assets/imgs/img.svg";
import "./SalesTable.css";

const SalesTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (id) => {
    if (selectedRow === id) {
      setSelectedRow(null); // Doble clic: deseleccionar
    } else {
      setSelectedRow(id); // Seleccionar nueva fila
    }
  };

  return (
    <div className="sales-table">
      <div className="sales-header">
        <div className="sales-header-title">
          <h2 className="sales-title"><strong>Ventas</strong></h2>
          <span className="badge-orders"><strong>+2 Orders</strong></span>
        </div>
        <div className="sales-actions">
          <NavLink
            to="/admin/sale-page" // Redirigir a /admin/sale-page
            className="select-sale"
            style={{
              backgroundColor: selectedRow ? "#7c3aed" : "#ccc",
              cursor: selectedRow ? "pointer" : "not-allowed",
              pointerEvents: selectedRow ? "auto" : "none", // Deshabilitar clic si no hay fila seleccionada
              textDecoration: "none", // Eliminar subrayado
            }}
          >
            <img src={icons} alt="icon" /> <strong>Venta Seleccionada</strong>
          </NavLink>
        </div>
      </div>

      <table className="sales-table-content">
        <thead>
          <tr>
            <th></th>
            <th><strong>Orden ID</strong></th>
            <th><strong>Producto</strong></th>
            <th><strong>Dia</strong></th>
            <th><strong>Total</strong></th>
            <th><strong>Status</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={selectedRow === "302012" ? "selected" : ""}
            onClick={() => handleRowClick("302012")}
          >
            <td>
              <div className={`dot ${selectedRow === "302012" ? "purple" : "gray"}`}></div>
            </td>
            <td><strong>#302012</strong></td>
            <td className="product-cell">
              <img src={image} alt="producto" />
              <div>
                <div className="product-title"><strong>OnePlus 11R 5G</strong></div>
                <div className="product-subtext"><strong>+3 other products</strong></div>
              </div>
            </td>
            <td><strong>1 min ago</strong></td>
            <td><strong>32,999/-</strong></td>
            <td><span className="status-badge processing"><strong>Processing</strong></span></td>
          </tr>

          <tr
            className={selectedRow === "302011" ? "selected" : ""}
            onClick={() => handleRowClick("302011")}
          >
            <td>
              <div className={`dot ${selectedRow === "302011" ? "purple" : "gray"}`}></div>
            </td>
            <td><strong>#302011</strong></td>
            <td className="product-cell">
              <img src={img} alt="producto" />
              <div>
                <div className="product-title"><strong>OPPO Reno 10 pro</strong></div>
                <div className="product-subtext"><strong>+1 other products</strong></div>
              </div>
            </td>
            <td><strong>1 min ago</strong></td>
            <td><strong>28,999/-</strong></td>
            <td><span className="status-badge processing"><strong>Processing</strong></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;