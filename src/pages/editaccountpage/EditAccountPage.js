import "./editaccountpage.css";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../../util/Auth";

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const EditAccountPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Función para obtener los datos del usuario actual
  useEffect(() => {
    const userFromToken = getUserFromToken();

    if (userFromToken) {
      setUser(userFromToken);
    } else {
      navigate("/signin");
    }
  }, []);

  const validateAndSave = () => {
    if (!name.trim()) {
      toast.error("El nombre es obligatorio");
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Ingrese un email válido");
      return;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      toast.error("Ingrese un número de teléfono válido (10 dígitos)");
      return;
    }

    toast.success("Cambios guardados correctamente");
    navigate("/account");
  };

  return (
    <section>
      <Navbar />
      <div>
        {user ? (
          <div className="my-5 py-5">
            <div className="row container mx-auto account-container">
              <div className="text-center mt-3 pt-5 col-lg-4 col-md-12 col-sm-12">
                <img
                  src="/usericon.png"
                  alt="User Profile"
                  className="edit-user-image"
                />
              </div>

              <div className="form-container col-lg-8 col-md-12 col-sm-12">
                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control edit-input"
                      id="account-name"
                      name="name"
                      placeholder="Contraseña"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control edit-input"
                      id="account-email"
                      name="email"
                      placeholder="Confirmar Contraseña"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Telefono</label>
                    <input
                      type="text"
                      className="form-control edit-input"
                      id="account-password"
                      name="phone"
                      placeholder="Telefono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label></label>
                    <button
                      className="form-control edit-input change-password-btn"
                      onClick={() => navigate("/edit-account")}
                    >
                      <span className="btn-text">Cambiar contraseña</span>
                      <span className="material-symbols-outlined edit-icon">
                        edit
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <button className="save-account-btn" onClick={validateAndSave}>
                Guardar cambios
              </button>
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
