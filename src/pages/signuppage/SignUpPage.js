import './signuppage.css';

import React, { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  Link,
  useNavigate,
} from 'react-router-dom'; // Importa useNavigate
import { toast } from 'react-toastify';

import { auth } from '../../components/firebase/FireBase';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Usa useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesion correcto");
            toast.success("Inicio de sesión correcto", {
                position: "top-center",
            });
            navigate('/'); // Redirige al usuario a la página de inicio
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center"
            });
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
                            <input type="email" className="form-control" id="login-email" name="Email" placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" id="login-password" name="password" placeholder="Contraseña"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn" id="login-btn" value="Ingresar" />
                        </div>
                        <div className="form-group">
                            <Link id="register-url" className="btn" to="/register">¿No tienes una cuenta? Registrarse</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default SignUpPage;
