import "./editaccountpage.css";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserFromToken, isAuthenticated } from "../../util/Auth";

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const EditAccountPage = () => {
  const linkStyle = { textDecoration: "none", color: "purple" };
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  // Función para obtener los datos del usuario actual
  useEffect(() => {
    const userFromToken = getUserFromToken();

    if (userFromToken) {
      setUser(userFromToken);
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <section>
      <Navbar />
      <div>
        {user ? (
          <div className="my-5 py-5">
            <div className="row container mx-auto">
              <div className="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                <h3 className="font-weight-bold">Información de Cuenta</h3>
                <hr className="mx-auto" />
                <div className="account-info">
                  <p style={linkStyle}>{user.email}</p>
                  <p>
                    <Link to="/cart" style={linkStyle} id="order-btn">
                      Tus pedidos
                    </Link>
                  </p>
                  <p>
                    <a
                      href="/signin"
                      id="logout-btn"
                      onClick={() => true}
                      style={linkStyle}
                    >
                      Cerrar Sesión
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <form id="account-form" onSubmit={() => true}>
                  <h3>Cambiar Contraseña</h3>
                  <hr className="mx-auto" />
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="account-password"
                      name="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="account-password-confirm"
                      name="confirmPassword"
                      placeholder="Confirmar Contraseña"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn"
                      value="Confirmar"
                      id="change-pass-btn"
                    />
                  </div>
                </form>
                {message && <p className="text-danger">{message}</p>}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5 pt-5">
            <h3>No hay información de usuario disponible</h3>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default EditAccountPage;
