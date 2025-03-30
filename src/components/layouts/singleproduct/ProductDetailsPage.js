import "./productdetailspage.css";

import React, { useEffect, useState } from "react";

import { getUserFromToken, isAuthenticated } from "../../../util/Auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { ProductData } from "../../../util/ProductData";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newData = ProductData.filter(
      (product) => product.id === parseInt(id)
    );

    if (newData.length > 0) {
      setProductData(newData[0]);
      setMainImage(newData[0].image1);
    }
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const addToCart = async () => {
    if (!isAuthenticated()) {
      toast.error("Debes estar logueado para agregar productos al carrito");
      return;
    }

    let user = getUserFromToken();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.productId === productData.id
    );

    console.log(productData);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, aumenta la cantidad

      cart[existingProductIndex].quantity += Number(quantity);
    } else {
      // Si el producto no está en el carrito, agrégalo

      cart.push({
        email: user.email,
        productId: productData.id,
        name: productData.name,
        image1: productData.image1,
        price: productData.price,
        quantity: Number(quantity),
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Producto agregado al carrito");
  };

  return (
    <section className="product-details">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <img
            className="main-img p-3"
            src={mainImage}
            alt="producto"
            id="mainImg"
          />
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

        <div className="detail col-lg-6 col-md-12 col-12 mx-3">
          <h6>{productData.category}</h6>
          <h3 className="py-4">{productData.name}</h3>
          <h2>{productData.price}</h2>
          <div className="stock-info mt-4 mb-3">
            <h6>Stock : {productData.stock} unidades</h6>
          </div>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="buy-btn" onClick={addToCart}>
            Agregar al Carrito
          </button>
          <h4 className="mt-5 mb-5">Detalles del Producto</h4>
          <span>{productData.description}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
