import './registerpage.css';
import 'react-toastify/dist/ReactToastify.css'; 

import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  doc,
  setDoc,
} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  auth,
  db,
} from '../../components/firebase/FireBase';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: fname
                });
            }
            toast.success("Usuario registrado", {
                position: "top-center",
            });
        } catch (error) {
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
                    <h2 className="form-weight-bold">Registrarse</h2>
                    <hr className="mx-auto" />
                </div>
                <div className="mx-auto container">
                    <form onSubmit={handleRegister} id="register-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" id="register-name" name="name" placeholder="Name"
                                onChange={(e) => setFname(e.target.value)}  />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" id="register-email" name="Email" placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" id="register-password" name="password" placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Confirmar Contraseña</label>
                            <input type="password" className="form-control" id="register-confirm-password" name="confirmpassword" placeholder="Confirmar Contraseña"
                                onChange={(e) => setPassword(e.target.value)}  />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn" id="register-btn" value="Register" />
                        </div>
                        <div className="form-group">
                            <Link id="register-url" className="btn" to="/signup">¿Ya tienes una cuenta? Ingresar</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default RegisterPage;
