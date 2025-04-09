import "./navbar.css"; // Importa los estilos personalizados
import React, { useState, useEffect } from "react"; // Hooks de React
import { Link, useNavigate } from "react-router-dom"; // Navegación sin recarga
import logo from "../../../assets/imgs/logo.jpg"; // Logo de la app

const Navbar = () => {
  const linkStyle = { textDecoration: "none", color: "inherit" }; // Estilo inline para eliminar subrayado y heredar color
  const navigate = useNavigate(); // Hook para redirección programática

  // Estado para controlar si el usuario está logueado
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  // Escucha cambios en el localStorage para sincronizar sesión entre pestañas
  useEffect(() => {
    const handleStorageChange = () => {
      setAccessToken(localStorage.getItem("access_token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Cierra sesión: elimina token, actualiza estado y redirige a login
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setAccessToken(null);
    navigate("/signin");
  };

  return (
    <section className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
      <div className="container">
        {/* Logo de la tienda */}
        <img className="logo" alt="logo" src={logo} />

        {/* Nombre de la tienda que redirige al home */}
        <Link to="/" className="no-link-style" style={linkStyle}>
          <h2 className="brand no-link-style">SmartBazzar</h2>
        </Link>

        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Rutas públicas */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>

            {/* Si hay token, mostrar acceso a cuenta */}
            {accessToken && (
              <li className="nav-item">
                <Link className="nav-link" to="/account">Cuenta</Link>
              </li>
            )}
          </ul>

          {/* Íconos del lado derecho */}
          <ul className="navbar-nav">
            {/* Icono de carrito solo si está logueado */}
            {accessToken && (
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </Link>
              </li>
            )}

            {/* Cerrar sesión si está logueado, de lo contrario mostrar login */}
            {accessToken ? (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ marginRight: "5px" }}>
                    logout
                  </span>
                  Cerrar sesión
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  <span className="material-symbols-outlined">account_circle</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
