// Importa el archivo de estilos CSS para este componente
import "./productdetailspage.css";

// Importaciones de React necesarias
import React, { useEffect, useState } from "react";

// Funciones de autenticación y manejo de usuario desde util
import { getUserFromToken, isAuthenticated } from "../../../util/Auth";

// Hook de React Router para acceder a parámetros de la URL
import { useParams } from "react-router-dom";

// Biblioteca para notificaciones visuales
import { toast } from "react-toastify";

// Datos simulados o estáticos de productos
import { ProductData } from "../../../util/ProductData";

// Componente funcional principal
const ProductDetailsPage = () => {
  // Obtiene el ID del producto desde la URL
  const { id } = useParams();

  // Estados del componente
  const [productData, setProductData] = useState({}); // Datos del producto actual
  const [mainImage, setMainImage] = useState(""); // Imagen principal del producto
  const [quantity, setQuantity] = useState(1); // Cantidad a agregar al carrito

  // Hook para cargar datos del producto al montar o cambiar ID
  useEffect(() => {
    const newData = ProductData.filter(
      (product) => product.id === parseInt(id) // Compara ID como número
    );

    // Si el producto existe, actualiza estado
    if (newData.length > 0) {
      setProductData(newData[0]);
      setMainImage(newData[0].image1);
    }
  }, [id]);

  // Maneja el cambio de imagen principal al hacer clic
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  // Lógica para agregar producto al carrito
  const addToCart = async () => {
    // Verifica autenticación
    if (!isAuthenticated()) {
      toast.error("Debes estar logueado para agregar productos al carrito");
      return;
    }

    // Obtiene datos del usuario desde token
    let user = getUserFromToken();

    // Carga carrito desde localStorage o crea nuevo
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verifica si el producto ya existe en el carrito
    const existingProductIndex = cart.findIndex(
      (item) => item.productId === productData.id
    );

    console.log(productData); // Debug en consola

    if (existingProductIndex !== -1) {
      // Si ya existe, suma la cantidad
      cart[existingProductIndex].quantity += Number(quantity);
    } else {
      // Si no existe, lo agrega con datos
      cart.push({
        email: user.email,
        productId: productData.id,
        name: productData.name,
        image1: productData.image1,
        price: productData.price,
        quantity: Number(quantity),
      });
    }

    // Guarda carrito actualizado
    localStorage.setItem("cart", JSON.stringify(cart));

    // Muestra notificación de éxito
    toast.success("Producto agregado al carrito");
  };

  // Renderizado del componente
  return (
    <section className="product-details">
      <div className="row mt-5">
        {/* Columna de imágenes del producto */}
        <div className="col-lg-5 col-md-6 col-sm-12">
          {/* Imagen principal */}
          <img
            className="main-img p-3"
            src={mainImage}
            alt="producto"
            id="mainImg"
          />

          {/* Grupo de miniaturas */}
          <div className="small-img-group p-2">
            <div className="small-img-col">
              <img
                src={productData.image1}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image1)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={productData.image2}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image2)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={productData.image3}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image3)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={productData.image4}
                alt="producto pequeño"
                width="100%"
                className="small-img"
                onClick={() => handleImageClick(productData.image4)}
              />
            </div>
          </div>
        </div>

        {/* Columna de detalles del producto */}
        <div className="detail col-lg-6 col-md-12 col-12 mx-3">
          <h6>{productData.category}</h6>
          <h3 className="py-4">{productData.name}</h3>
          <h2>{productData.price}</h2>

          {/* Información de stock */}
          <div className="stock-info mt-4 mb-3">
            <h6>Stock : {productData.stock} unidades</h6>
          </div>

          {/* Input para seleccionar cantidad */}
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />

          {/* Botón para agregar al carrito */}
          <button className="buy-btn" onClick={addToCart}>
            Agregar al Carrito
          </button>

          {/* Descripción del producto */}
          <h4 className="mt-5 mb-5">Detalles del Producto</h4>
          <span>{productData.description}</span>
        </div>
      </div>
    </section>
  );
};

// Exporta el componente
export default ProductDetailsPage;
