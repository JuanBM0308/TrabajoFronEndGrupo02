import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Para saber en qué ruta estamos
import { NavLink } from "react-router-dom"; // Para navegación con estilos activos

import "./navbar-admin.css"; // Estilos personalizados
import logo from "../../../assets/imgs/logo.jpg"; // Logo de la empresa

const NavbarAdmin = () => {
  const location = useLocation(); // Permite saber la ruta actual
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  ); // Estado local del token

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
            <div
              className={`select-line-button ${
                location.pathname === "/admin/dashboard-page" ? "active" : ""
              }`}
            ></div>
            <button type="button" className="user-list-button btn">
              {/* Icono de board */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#6728a1"
                class="bi bi-clipboard-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
              <span className="text-customer-list">Dashboard</span>
            </button>
          </NavLink>

          {/* Link a lista de clientes */}
          <NavLink to="/admin/client-information-page" className="nav-item">
            <div
              className={`select-line-button ${
                [
                  "/admin/client-information-page",
                  "/admin/client-list",
                ].includes(location.pathname)
                  ? "active"
                  : ""
              }`}
            ></div>
            <button type="button" className="user-list-button btn">
              {/* Icono de personas */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#6728a1"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
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
