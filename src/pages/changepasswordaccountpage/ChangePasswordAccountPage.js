import "./changepasswordaccountpage.css";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../../util/Auth";

// Componentes de layout
import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

// Página de cambio de contraseña del usuario
const ChangePasswordAccountPage = () => {
  const navigate = useNavigate();

  // Estados para los datos del formulario y usuarios
  const [users, setUsers] = useState([]); // Lista de usuarios cargados desde JSON
  const [user, setUser] = useState(null); // Usuario autenticado
  const [currentPassword, setCurrentPassword] = useState(""); // Contraseña actual
  const [newPassword, setNewPassword] = useState(""); // Nueva contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmación de nueva contraseña

  // Obtener usuario desde token y cargar usuarios desde archivo JSON si no están cargados
  useEffect(() => {
    const userFromToken = getUserFromToken();

    if (userFromToken) {
      setUser(userFromToken); // Guardar usuario autenticado
    } else {
      navigate("/signin"); // Redirigir a inicio de sesión si no hay usuario
    }

    // Cargar lista de usuarios si aún no se ha hecho
    if (users.length === 0) {
      fetch("/users.json")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error cargando usuarios:", error));
    }
  }, []);

  // Validar campos y guardar nueva contraseña
  const validateAndSave = () => {
    var currentUser = users.find((u) => u.email === user.email); // Buscar al usuario actual

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

    // Aquí podrías guardar la nueva contraseña en el backend o local storage

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
              {/* Imagen del usuario */}
              <div className="text-center mt-3 pt-5 col-lg-4 col-md-12 col-sm-12">
                <img
                  src="/usericon.png"
                  alt="User Profile"
                  className="edit-user-image"
                />
              </div>

              {/* Formulario de cambio de contraseña */}
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
          // Mensaje si no hay usuario autenticado
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
