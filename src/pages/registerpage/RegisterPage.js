import "./registerpage.css"; // Estilos personalizados para esta página
import "react-toastify/dist/ReactToastify.css"; // Estilos para los toasts de notificación

import React, { useState, useEffect } from "react"; // Importación de React y hooks necesarios

import { Link, useNavigate } from "react-router-dom"; // Link para navegación y useNavigate para redireccionamiento
import { toast } from "react-toastify"; // Librería para mostrar notificaciones

import Footer from "../../components/layouts/footer/Footer"; // Footer del sitio
import Navbar from "../../components/layouts/navbar/Navbar"; // Navbar del sitio

const RegisterPage = () => {
  const [, setName] = useState(""); // Estado para el nombre, aunque no se usa (solo se actualiza)
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar la contraseña
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios cargados

  const navigate = useNavigate(); // Hook para redireccionar al usuario

  useEffect(() => {
    if (users.length === 0) { // Solo carga usuarios si el array está vacío
      fetch("/users.json")
        .then((response) => response.json())
        .then((data) => setUsers(data)) // Guarda los usuarios en el estado
        .catch((error) => console.error("Error cargando usuarios:", error)); // Manejo de errores
    }
  }, [users]); // Dependencia: se ejecuta si cambia 'users'

  const handleRegister = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden", {
        position: "bottom-center",
      });

      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password // Verifica si ya existe un usuario con ese email y contraseña
    );

    if (user) {
      toast.error("El usuario ya existe", {
        position: "bottom-center",
      });

      return;
    }

    const currentUser = users.find((u) => u.role === "user"); // Toma el primer usuario con rol "user"

    localStorage.setItem("access_token", currentUser.access_token); // Guarda su token en localStorage
    toast.success("Inicio de sesión correcto", { position: "top-center" });

    navigate("/account"); // Redirige al perfil del usuario
  };

  return (
    <section>
      <Navbar />

      <div className="my-5 py-5">
        <div className="container text-center mt-3 pt-5">
          <h2 className="form-weight-bold">Registrarse</h2>
          <hr className="mx-auto" />
        </div>

        <div className="mx-auto container">
          <form onSubmit={handleRegister} id="register-form">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                id="register-name"
                name="name"
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)} // Actualiza el nombre
              />
            </div>

            <div className="form-group">
              <label>Correo electronico</label>
              <input
                type="text"
                className="form-control"
                id="register-email"
                name="Email"
                placeholder="Correo electronico"
                onChange={(e) => setEmail(e.target.value)} // Actualiza el email
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="register-password"
                name="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)} // Actualiza la contraseña
              />
            </div>

            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="register-confirm-password"
                name="confirmpassword"
                placeholder="Confirmar Contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)} // Actualiza la confirmación de la contraseña
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="btn"
                id="register-btn"
                value="Register" // Botón para enviar el formulario
              />
            </div>

            <div className="form-group">
              <Link id="register-url" className="btn" to="/signin">
                ¿Ya tienes una cuenta? Ingresar // Link para ir al login
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default RegisterPage;
