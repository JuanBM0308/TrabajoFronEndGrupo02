import "./changepasswordaccountpage.css";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../../util/Auth";

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const ChangePasswordAccountPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Función para obtener los datos del usuario actual
  useEffect(() => {
    const userFromToken = getUserFromToken();

    if (userFromToken) {
      setUser(userFromToken);
    } else {
      navigate("/signin");
    }

    if (users.length === 0) {
      fetch("/users.json")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error cargando usuarios:", error));
    }
  }, []);

  const validateAndSave = () => {
    var currentUser = users.find((u) => u.email === user.email);

    if (!currentPassword.trim()) {
      toast.error("La contraseña actual no puede estar vacía");
      return;
    }

    if (currentUser.password !== currentPassword) {
      toast.error("La contraseña actual no es correcta");
      return;
    }

    if (!newPassword.trim()) {
      toast.error("La contraseña nueva no puede estar vacía");
      return;
    }

    if (!confirmPassword.trim() || confirmPassword !== newPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    toast.success("Contraseña actualizada correctamente");
    navigate("/account");
  };

  return (
    <section>
      <Navbar />
      <div>
        {user ? (
          <div className="my-5 py-5">
            <div className="row container mx-auto mt-5">
              <div className="text-center mt-3 pt-5 col-lg-4 col-md-12 col-sm-12">
                <img
                  src="/usericon.png"
                  alt="User Profile"
                  className="edit-user-image"
                />
              </div>

              <div className="password-form-container col-lg-8 col-md-12 col-sm-12">
                <p className="title-password">CAMBIAR CONTRASEÑA</p>
                <hr></hr>

                <div className="password-form-group">
                  <label>
                    <strong>Contraseña actual</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control edit-input"
                    id="current-password"
                    name="current-password"
                    placeholder="Contraseña actual"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="password-form-group">
                  <label>
                    <strong>Nueva contraseña</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control edit-input"
                    id="new-password"
                    name="new-password"
                    placeholder="Nueva contraseña"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="password-form-group">
                  <label>
                    <strong>Confirmar contraseña</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control edit-input"
                    id="new-password-confirm"
                    name="new-password-confirm"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="save-account-btn" onClick={validateAndSave}>
                  Guardar contraseña
                </button>
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

export default ChangePasswordAccountPage;
