// Importa los estilos CSS específicos para este componente
import "./cartproduct.css";

// Importa React y el hook useState para manejar el estado local
import React, { useState } from "react";

// Importa la función toast de react-toastify para mostrar notificaciones
import { toast } from "react-toastify";

// Componente funcional que recibe `product` y `fetchCartItems` como props
const CartProduct = ({ product, fetchCartItems }) => {
  // Estado local para manejar la cantidad del producto
  const [quantity, setQuantity] = useState(product.quantity);

  // Función para eliminar el producto del carrito
  const handleRemove = () => {
    // Obtiene el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Filtra el producto a eliminar
    cart = cart.filter((item) => item.productId !== product.productId);

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Muestra notificación de éxito
    toast.success("Producto removido del carrito");

    // Recarga la página para reflejar cambios
    window.location.reload();
  };

  // Función para actualizar la cantidad del producto en el carrito
  const handleUpdate = () => {
    // Obtiene el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Busca y actualiza la cantidad del producto
    cart = cart.map((item) =>
      item.productId === product.productId
        ? { ...item, quantity: quantity }
        : item
    );

    // Guarda el carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notifica al usuario
    toast.success("Cantidad actualizada");

    // Recarga la página para reflejar el cambio
    window.location.reload();
  };

  return (
    <tr>
      {/* Columna del producto con imagen, nombre, precio y opción de eliminar */}
      <td>
        <div className="product-info">
          <img src={product.image1} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <small>
              <span>$</span>
              {product.price}
            </small>
            <br />
            <a className="remove-btn" onClick={handleRemove} href="#">
              Remover
            </a>
          </div>
        </div>
      </td>

      {/* Columna para editar la cantidad del producto */}
      <td>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <a onClick={handleUpdate} href="#" className="edit-btn">
          Editar
        </a>
      </td>

      {/* Columna que muestra el total por ese producto */}
      <td>
        <span>$</span>
        <span className="product-price">{product.price * quantity}</span>
      </td>
    </tr>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default CartProduct;
