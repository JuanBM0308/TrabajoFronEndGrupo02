import "./accountpage.css";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserFromToken, isAuthenticated } from "../../util/Auth";

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const AccountPage = () => {
  const linkStyle = { textDecoration: "none", color: "gray" };
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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
              <div className="account-container text-center mt-3 pt-5">
                <img
                  src="/usericon.png"
                  alt="User Profile"
                  className="user-image"
                />

                <h3 className="title">{user.name}</h3>
                <p className="subtitle">
                  <strong>Rol:</strong> {user.role}
                </p>

                <hr className="mx-auto" />
                <div className="account-info">
                  <p style={linkStyle}>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p style={linkStyle}>
                    <strong>Telefono:</strong> 555-555-5555
                  </p>
                  <button
                    className="edit-btn"
                    onClick={() => navigate("/edit-account")}
                  >
                    Editar cuenta
                  </button>
                </div>
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

export default AccountPage;
