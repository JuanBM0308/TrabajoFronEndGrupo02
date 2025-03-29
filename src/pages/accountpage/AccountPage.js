import './accountpage.css';

import React, {
  useEffect,
  useState,
} from 'react';

import firebase from 'firebase/compat/app';
import {
  doc,
  getDoc,
} from 'firebase/firestore';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import {
  auth,
  db,
} from '../../components/firebase/FireBase';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const AccountPage = () => {
    const linkStyle = { textDecoration: 'none', color: 'purple' };
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    // Función para obtener los datos del usuario actual
    const fetchUserData = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("No se encontraron datos de usuario");
                }
            } else {
                console.log("No hay usuario autenticado");
            }
        } catch (error) {
            console.error("Error al obtener datos de usuario:", error.message);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    // Función para manejar el cierre de sesión
    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/signup');
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    // Función para manejar el cambio de contraseña
    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden");
            return;
        }

        const user = auth.currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, user.password);

        try {
            await user.reauthenticateWithCredential(credential);
            await user.updatePassword(password);
            setMessage("Contraseña cambiada correctamente");
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setMessage(error.message);
            console.error("Error al cambiar la contraseña:", error.message);
        }
    };

    return (
        <section>
            <Navbar />
            <div>
                {userDetails ? (
                    <div className="my-5 py-5">
                        <div className="row container mx-auto">
                            <div className="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                                <h3 className="font-weight-bold">Información de Cuenta</h3>
                                <hr className="mx-auto" />
                                <div className="account-info">
                                    <p style={linkStyle}>{userDetails.email}</p>
                                    <p>
                                        <Link to="/cart" style={linkStyle} id="order-btn">Tus pedidos</Link>
                                    </p>
                                    <p>
                                        <a href="/signup" id="logout-btn" onClick={handleLogout} style={linkStyle}>Cerrar Sesión</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <form id="account-form" onSubmit={handleChangePassword}>
                                    <h3>Cambiar Contraseña</h3>
                                    <hr className="mx-auto" />
                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input type="password" className="form-control" id="account-password" name="password"
                                            placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirmar Contraseña</label>
                                        <input type="password" className="form-control" id="account-password-confirm"
                                            name="confirmPassword" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn" value="Confirmar" id="change-pass-btn" />
                                    </div>
                                </form>
                                {message && <p className="text-danger">{message}</p>}
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
