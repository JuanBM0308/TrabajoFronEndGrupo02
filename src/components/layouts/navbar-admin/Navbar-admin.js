import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Para saber en qué ruta estamos
import { NavLink } from "react-router-dom"; // Para navegación con estilos activos

import "./navbar-admin.css"; // Estilos personalizados
import logo from "../../../assets/imgs/logo.jpg"; // Logo de la empresa

const NavbarAdmin = () => {
  const location = useLocation(); // Permite saber la ruta actual
  const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token")); // Estado local del token

  useEffect(() => {
    // Escucha cambios en el localStorage (cuando otro tab hace login/logout)
    const handleStorageChange = () => {
      setAccessToken(localStorage.getItem("access_token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setAccessToken(null); // Elimina el token y actualiza estado
  };

  return (
    <section className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top">
      <div className="container">
        {/* Logo + Título del Admin */}
        <div className="container-divisor">
          <img className="logo" alt="logo" src={logo} />
          <div className="container-title-admin">
            <h2 className="brand no-link-style">SmartBazzar</h2>
            <span className="sub-title">Admin Dashboard</span>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="container-divisor">
          {/* Link al dashboard */}
          <NavLink to="/admin/dashboard-page" className="nav-item">
            <div className={`select-line-button ${location.pathname === "/admin/dashboard-page" ? "active" : ""}`}></div>
            <button type="button" className="user-list-button btn">
              {/* Icono de casa */}
              <svg>...</svg>
              <span className="text-customer-list">Dashboard</span>
            </button>
          </NavLink>

          {/* Link a lista de clientes */}
          <NavLink to="/admin/client-information-page" className="nav-item">
            <div
              className={`select-line-button ${
                ["/admin/client-information-page", "/admin/client-list"].includes(location.pathname) ? "active" : ""
              }`}
            ></div>
            <button type="button" className="user-list-button btn">
              {/* Icono de personas */}
              <svg>...</svg>
              <span className="text-customer-list">Lista de clientes</span>
            </button>
          </NavLink>

          {/* Logout si hay sesión iniciada */}
          {accessToken ? (
            <NavLink to="/" className="nav-item" onClick={handleLogout}>
              <button type="button" className="user-list-button btn">
                <svg>...</svg>
                <span className="text-customer-list">Cerrar sesión</span>
              </button>
            </NavLink>
          ) : (
            // Login si no hay sesión
            <NavLink to="/signin" className="nav-item">
              <button type="button" className="user-list-button btn">
                <span className="text-customer-list">Iniciar sesión</span>
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavbarAdmin;
