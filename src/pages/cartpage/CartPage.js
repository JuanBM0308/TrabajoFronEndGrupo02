import "./cartpage.css";

import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { getUserFromToken, isAuthenticated } from "../../util/Auth";

import CartProduct from "../../components/cartproduct/CartProduct";
import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let user = getUserFromToken();

    if (user) {
      fetchCartItems(user);
    } else {
      toast.error("Debes estar logueado para ver tu carrito");
    }
  }, []);

  const fetchCartItems = (user) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.email === user.email);

    if (cart.length > 0) {
      const filteredCart = cart.filter((item) => item.userId === user.uid);
      setCartItems(filteredCart);
      calculateTotal(filteredCart);
    } else {
      setCartItems([]);
      setTotal(0);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
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
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                product={item}
                fetchCartItems={fetchCartItems}
              />
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
};

export default CartPage;
