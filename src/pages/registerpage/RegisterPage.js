import "./registerpage.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const RegisterPage = () => {
  const [, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios

  const navigate = useNavigate(); // Usa useNavigate

  useEffect(() => {
    if (users.length === 0) {
      fetch("/users.json")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error cargando usuarios:", error));
    }
  }, [users]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden", {
        position: "bottom-center",
      });

      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      toast.error("El usuario ya existe", {
        position: "bottom-center",
      });

      return;
    }

    const currentUser = users.find((u) => u.role === "user");

    localStorage.setItem("access_token", currentUser.access_token);
    toast.success("Inicio de sesión correcto", { position: "top-center" });

    navigate("/account");
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="btn"
                id="register-btn"
                value="Register"
              />
            </div>

            <div className="form-group">
              <Link id="register-url" className="btn" to="/signin">
                ¿Ya tienes una cuenta? Ingresar
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
