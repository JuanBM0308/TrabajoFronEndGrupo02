import './cartproduct.css';

import React, { useState } from 'react';

import {
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

import { db } from '../../components/firebase/FireBase'; // Ruta corregida

const CartProduct = ({ product, fetchCartItems }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleRemove = async () => {
    try {
      await deleteDoc(doc(db, 'cart', product.id));
      toast.success('Producto removido del carrito');
      fetchCartItems(); // Actualiza los ítems del carrito después de la eliminación
    } catch (error) {
      toast.error('Error al remover el producto del carrito');
    }
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'cart', product.id), { quantity });
      toast.success('Cantidad actualizada');
      fetchCartItems(); // Actualiza los ítems del carrito después de la actualización
    } catch (error) {
      toast.error('Error al actualizar la cantidad');
    }
  };

  return (
    <tr>
      <td>
        <div className="product-info">
          <img src={product.image1} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <small><span>$</span>{product.price}</small>
            <br />
            <a className="remove-btn" onClick={handleRemove} href="#">Remover</a>
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
        <a onClick={handleUpdate} href="#" className="edit-btn">Editar</a>
      </td>
      <td>
        <span>$</span>
        <span className="product-price">{product.price * quantity}</span>
      </td>
    </tr>
  );
};

export default CartProduct;
