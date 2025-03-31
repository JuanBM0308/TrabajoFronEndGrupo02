import "./cartproduct.css";

import React, { useState } from "react";
import { toast } from "react-toastify";

const CartProduct = ({ product, fetchCartItems }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleRemove = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Filtra para eliminar el producto
    cart = cart.filter((item) => item.productId !== product.productId);

    // Guarda el nuevo carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Producto removido del carrito");
    window.location.reload();
  };

  const handleUpdate = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map((item) =>
      item.productId === product.productId
        ? { ...item, quantity: quantity }
        : item
    );

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Cantidad actualizada");
    window.location.reload();
  };

  return (
    <tr>
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
      <td>
        <span>$</span>
        <span className="product-price">{product.price * quantity}</span>
      </td>
    </tr>
  );
};

export default CartProduct;
