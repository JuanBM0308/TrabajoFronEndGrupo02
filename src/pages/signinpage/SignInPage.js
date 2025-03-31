import "./signinpage.css";

import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      toast.error("Las credenciales ingresadas no son correctas", {
        position: "bottom-center",
      });

      return;
    }

    localStorage.setItem("access_token", user.access_token);
    toast.success("Inicio de sesión correcto", { position: "top-center" });

    switch (user.role) {
      case "admin":
        navigate("/admin/dashboard-page");
        break;

      case "user":
        navigate("/account");
        break;

      default:
        toast.error("Las credenciales ingresadas no son correctas", {
          position: "bottom-center",
        });
        break;
    }
  };

  return (
    <section>
      <Navbar />
      <div className="my-5 py-5">
        <div className="container text-center mt-3 pt-5">
          <h2 className="form-weight-bold">Login</h2>
          <hr className="mx-auto" />
        </div>
        <div className="mx-auto container">
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="login-email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="login-password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn"
                id="login-btn"
                value="Ingresar"
              />
            </div>
            <div className="form-group">
              <Link id="register-url" className="btn" to="/register">
                ¿No tienes una cuenta? Registrarse
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignInPage;
