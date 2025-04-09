// Importa los estilos específicos de la página del carrito
import "./cartpage.css";

// Importa React y los hooks necesarios
import React, { useEffect, useState } from "react";

// Importa la librería de notificaciones y funciones de autenticación
import { toast } from "react-toastify";
import { getUserFromToken, isAuthenticated } from "../../util/Auth";

// Importa el componente para mostrar productos en el carrito
import CartProduct from "../../components/cartproduct/CartProduct";

// Importa los componentes de layout
import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";

// Componente principal de la página de carrito
const CartPage = () => {
  // Estado local para los ítems del carrito
  const [cartItems, setCartItems] = useState([]);
  // Estado local para el total del carrito
  const [total, setTotal] = useState(0);

  // Hook que se ejecuta al montar el componente
  useEffect(() => {
    let user = getUserFromToken(); // Obtiene usuario autenticado desde el token

    if (user) {
      fetchCartItems(user); // Si hay usuario, carga los productos del carrito
    } else {
      toast.error("Debes estar logueado para ver tu carrito"); // Muestra error si no hay usuario
    }
  }, []);

  // Función que obtiene los ítems del carrito desde localStorage
  const fetchCartItems = (user) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Obtiene carrito desde localStorage

    // Filtra los ítems por email del usuario actual
    cart = cart.filter((item) => item.email === user.email);

    if (cart.length > 0) {
      // Filtra nuevamente por el ID del usuario
      const filteredCart = cart.filter((item) => item.userId === user.uid);
      setCartItems(filteredCart); // Actualiza estado con los ítems filtrados
      calculateTotal(filteredCart); // Calcula el total del carrito
    } else {
      setCartItems([]); // Si no hay ítems, resetea carrito
      setTotal(0); // Total en 0
    }
  };

  // Función para calcular el total del carrito
  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total); // Actualiza el estado del total
  };

  // Render del componente
  return (
    <section>
      <Navbar /> {/* Barra de navegación */}
      <div className="cart container my-5 py-5">
        <div className="container mt-5">
          <h2 className="font-weight-bold">Tu Carrito</h2>
          <hr />
        </div>

        {/* Tabla de productos en el carrito */}
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
                fetchCartItems={fetchCartItems} // Se pasa función para actualizar carrito
              />
            ))}
          </tbody>
        </table>

        {/* Sección con el total del carrito */}
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

        {/* Botón para continuar con el proceso de compra */}
        <div className="checkout-container">
          <button className="btn checkout-btn">Continuar</button>
        </div>
      </div>
      <Footer /> {/* Pie de página */}
    </section>
  );
};

// Exporta el componente para ser usado en otras partes de la app
export default CartPage;
