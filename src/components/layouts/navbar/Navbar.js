import "./navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/imgs/logo.jpg";

const Navbar = () => {
  const linkStyle = { textDecoration: "none", color: "inherit" };
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  useEffect(() => {
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
    setAccessToken(null);
    navigate("/signin");
  };

  return (
    <section className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
      <div className="container">
        <img className="logo" alt="logo" src={logo} />

        <Link to="/" className="no-link-style" style={linkStyle}>
          <h2 className="brand no-link-style">SmartBazzar</h2>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>

            {accessToken ? (
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Cuenta
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>

          <ul className="navbar-nav">
            {accessToken ? (
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </Link>
              </li>
            ) : (
              <></>
            )}

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
                  <span
                    className="material-symbols-outlined"
                    style={{ marginRight: "5px" }}
                  >
                    logout
                  </span>
                  Cerrar sesión
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
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
