import './cartpage.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import CartProduct from '../../components/cartproduct/CartProduct';
import {
  auth,
  db,
} from '../../components/firebase/FireBase'; // Ruta corregida
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [user] = useAuthState(auth);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (user) {
            fetchCartItems();
        } else {
            toast.error('Debes estar logueado para ver tu carrito');
        }
    }, [user]);

    const fetchCartItems = async () => {
        try {
            const q = query(collection(db, 'cart'), where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCartItems(items);
            calculateTotal(items);
        } catch (error) {
            toast.error('Error al obtener los ítems del carrito');
        }
    };

    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(total);
    };

    return (
        <section>
            <Navbar />
            <div className="cart container my-5 py-5">
                <div className="container mt-5">
                    <h2 className="font-weight-bold">Tu Carrito</h2>
                    <hr />
                </div>
                <table className="mt-5 pt-5">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <CartProduct key={item.id} product={item} fetchCartItems={fetchCartItems} />
                        ))}
                    </tbody>
                </table>
                <div className="cart-total">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>${total}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="checkout-container">
                    <button className="btn checkout-btn">Continuar</button>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default CartPage;
