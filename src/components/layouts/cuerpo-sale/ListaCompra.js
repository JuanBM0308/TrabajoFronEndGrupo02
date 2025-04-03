import React from "react";
import image from "../../../assets/imgs/img-2.svg";
import img from "../../../assets/imgs/img.svg";
import "./ListaCompra.css";

const productos = [
  {
    nombre: "OnePlus 11R 5G",
    color: "Black",
    id: "302012",
    cantidad: "1 pcs",
    precio: "$32,99",
    total: "$32,99",
    imagen: image
  },
  {
    nombre: "OPPO Reno 10 pro",
    color: "Black",
    id: "302011",
    cantidad: "1 pcs",
    precio: "$28,99",
    total: "$28,99",
    imagen: img
  }
];

const ListaCompra = () => {
  return (
    <div className="compra-container">
      <div className="compra-header">
        <h4>Lista de compra</h4>
        <span className="badge-orden">+2 Orders</span>
      </div>

      <table className="tabla-compra">
        <thead>
          <tr>
            <th><strong>Product</strong></th>
            <th><strong>ID</strong></th>
            <th><strong>Total</strong></th>
            <th><strong>Precio</strong></th>
            <th><strong>Total</strong></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, i) => (
            <tr key={i}>
              <td data-label="Producto">
                <div className="producto-desc">
                  <img src={p.imagen} alt={p.nombre} className="producto-img" />
                  <div>
                    <strong>{p.nombre}</strong>
                    <div className="subtext">{p.color}</div>
                  </div>
                </div>
              </td>
              <td data-label="ID"><strong>{p.id}</strong></td>
              <td data-label="Total"><strong>{p.cantidad}</strong></td>
              <td data-label="Precio"><strong>{p.precio}</strong></td>
              <td data-label="Total"><strong>{p.total}</strong></td>
            </tr>
          ))}

          {/* Subtotal */}
          <tr className="resumen">
            <td></td>
            <td></td>
            <td></td>
            <td className="precio-resumen" data-label="Subtotal"><strong>Subtotal</strong></td>
            <td className="precio-resumen" data-label="Subtotal"><strong>$61,98</strong></td>
          </tr>

          {/* IVA */}
          <tr className="resumen">
            <td></td>
            <td></td>
            <td></td>
            <td className="precio-resumen" data-label="IVA"><strong>IVA(0)%</strong></td>
            <td className="precio-resumen" data-label="IVA"><strong>$0.00</strong></td>
          </tr>

          {/* Total */}
          <tr className="resumen total">
            <td></td>
            <td></td>
            <td></td>
            <td className="precio-resumen" data-label="Total"><strong>Total</strong></td>
            <td className="precio-resumen" data-label="Total"><strong>61,98</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListaCompra;
