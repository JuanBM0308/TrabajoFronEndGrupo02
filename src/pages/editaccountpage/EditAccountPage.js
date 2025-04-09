import "./editaccountpage.css"; // Importa estilos específicos para esta página

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../../util/Auth"; // Función para obtener el usuario desde el token

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

// Componente de la página para editar la cuenta del usuario
const EditAccountPage = () => {
  const navigate = useNavigate(); // Hook para redirigir

  // Estados para almacenar datos del usuario
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Al montar el componente, obtiene el usuario desde el token
  useEffect(() => {
    const userFromToken = getUserFromToken();

    if (userFromToken) {
      setUser(userFromToken);
    } else {
      navigate("/signin"); // Si no hay usuario, redirige a login
    }
  }, []);

  // Valida los datos y guarda los cambios
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
    navigate("/account"); // Simula guardar y redirige
  };

  return (
    <section>
      <Navbar />
      <div>
        {user ? (
          <div className="my-5 py-5">
            <div className="row container mx-auto account-container">
              {/* Imagen de perfil */}
              <div className="text-center mt-3 pt-5 col-lg-4 col-md-12 col-sm-12">
                <img
                  src="/usericon.png"
                  alt="User Profile"
                  className="edit-user-image"
                />
              </div>

              {/* Formulario de edición */}
              <div className="form-container col-lg-8 col-md-12 col-sm-12">
                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                  {/* Nombre */}
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

                  {/* Email */}
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
                  {/* Teléfono */}
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

                  {/* Botón para cambiar contraseña */}
                  <div className="form-group">
                    <label></label>
                    <button
                      className="form-control edit-input change-password-btn"
                      onClick={() => navigate("/change-password-account")}
                    >
                      <span className="btn-text">Cambiar contraseña</span>
                      <span className="material-symbols-outlined edit-icon">
                        edit
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Botón para guardar cambios */}
              <button className="save-account-btn" onClick={validateAndSave}>
                Guardar cambios
              </button>
            </div>
          </div>
        ) : (
          // Si no hay datos del usuario
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
