import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./navbar-admin.css";
import logo from "../../../assets/imgs/logo.jpg";

const NavbarAdmin = () => {
  const location = useLocation();

  return (
    <section className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top">
      <div className="container">
        <div className="container-divisor">
          <img className="logo" alt="logo" src={logo} />
          <div className="container-title-admin">
            <h2 className="brand no-link-style">SmartBazzar</h2>
            <span className="sub-title">Admin Dashboard</span>
          </div>
        </div>

        <div className="container-divisor">
          <NavLink to="/admin/sale-page" className="nav-item">
            <div className={`select-line-button ${location.pathname === "/admin/sale-page" ? "active" : ""}`}></div>
            <button type="button" className="user-list-button btn">
              <span className="text-customer-list">Dashboard</span>
            </button>
          </NavLink>

          <NavLink to="/admin/client-information-page" className="nav-item">
            <div className={`select-line-button ${location.pathname === "/admin/client-information-page" ? "active" : ""}`}></div>
            <button type="button" className="user-list-button btn">
              <span className="text-customer-list">Lista de clientes</span>
            </button>
          </NavLink>

          <NavLink to="/" className="nav-item">
            <button type="button" className="user-list-button btn">
              <span className="text-customer-list">Cerrar</span>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NavbarAdmin;
