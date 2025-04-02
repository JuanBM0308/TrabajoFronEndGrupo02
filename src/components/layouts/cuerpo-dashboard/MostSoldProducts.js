// src/components/layouts/cuerpo-dashboard/MostSoldProducts.js
import React from "react";
import "./MostSoldProducts.css";

const MostSoldProducts = () => {
  return (
    <div className="most-sold-products">
      <h2 className="section-title centered-title"><strong>Productos más vendidos</strong></h2>
      <ul className="product-list">
        <li className="product-item">
          <div className="product-name centered-text"><strong>Acer Predator XB273UGS</strong></div>
          <div className="product-bar">
            <div className="bar-fill" style={{ width: "70%" }}></div>
          </div>
          <div className="product-percent"><strong>70%</strong></div>
        </li>
        <li className="product-item">
          <div className="product-name centered-text"><strong>Nintendo Switch</strong></div>
          <div className="product-bar">
            <div className="bar-fill" style={{ width: "40%" }}></div>
          </div>
          <div className="product-percent"><strong>40%</strong></div>
        </li>
        <li className="product-item">
          <div className="product-name centered-text"><strong>Sony PlayStation 5</strong></div>
          <div className="product-bar">
            <div className="bar-fill" style={{ width: "60%" }}></div>
          </div>
          <div className="product-percent"><strong>60%</strong></div>
        </li>
        <li className="product-item">
          <div className="product-name centered-text"><strong>Microsoft Xbox Series X</strong></div>
          <div className="product-bar">
            <div className="bar-fill" style={{ width: "80%" }}></div>
          </div>
          <div className="product-percent"><strong>80%</strong></div>
        </li>
        <li className="product-item">
          <div className="product-name centered-text"><strong>Logitech G Pro X Superlight</strong></div>
          <div className="product-bar">
            <div className="bar-fill" style={{ width: "20%" }}></div>
          </div>
          <div className="product-percent"><strong>20%</strong></div>
        </li>
      </ul>
    </div>
  );
};

export default MostSoldProducts;