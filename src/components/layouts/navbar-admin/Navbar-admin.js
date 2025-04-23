import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./navbar-admin.css";
import logo from "../../../assets/imgs/logo.jpg";

const NavbarAdmin = () => {
  // Hook para obtener la ubicación actual de la ruta
  const location = useLocation();

  // Estado para almacenar el token de acceso desde el almacenamiento local
  const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"));

  // Efecto para escuchar cambios en el almacenamiento local y actualizar el estado del token
  useEffect(() => {
    const handleStorageChange = () => {
      setAccessToken(localStorage.getItem("access_token"));
    };

    // Agregar un listener para cambios en el almacenamiento local
    window.addEventListener("storage", handleStorageChange);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Eliminar el token del almacenamiento local
    setAccessToken(null); // Actualizar el estado del token
  };

  return (
    <section className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top">
      <div className="container">
        {/* Contenedor para el logo y el título */}
        <div className="container-divisor">
          <img className="logo" alt="logo" src={logo} />
          <div className="container-title-admin">
            <h2 className="brand no-link-style">SmartBazzar</h2>
            <span className="sub-title">Admin Dashboard</span>
          </div>
        </div>

        {/* Contenedor para los enlaces de navegación */}
        <div className="container-divisor">
          {/* Enlace al dashboard */}
          <NavLink to="/admin/dashboard-page" className="nav-item">
            <div
              className={`select-line-button ${
                location.pathname === "/admin/dashboard-page" ? "active" : ""
              }`}
            ></div>
            <button type="button" className="user-list-button btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#6728a1"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>
              <span className="text-customer-list">Dashboard</span>
            </button>
          </NavLink>

          {/* Enlace a la lista de clientes */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#6728a1"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              <span className="text-customer-list">Lista de clientes</span>
            </button>
          </NavLink>

          {/* Botón de cierre de sesión o inicio de sesión según el estado del token */}
          {accessToken ? (
            <NavLink to="/" className="nav-item" onClick={handleLogout}>
              <button type="button" className="user-list-button btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#6728a1"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
                <span className="text-customer-list">Cerrar sesión</span>
              </button>
            </NavLink>
          ) : (
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
