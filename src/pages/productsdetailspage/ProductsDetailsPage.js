import React from "react";

import { useParams } from "react-router-dom"; // Hook para obtener parámetros de la URL

import Productlistcard from "../../components/cards/productlist-card/Productlistcard"; // Tarjeta de producto relacionado
import Footer from "../../components/layouts/footer/Footer"; // Footer de la página
import Navbar from "../../components/layouts/navbar/Navbar"; // Navbar superior
import ProductDetailsPage from "../../components/layouts/singleproduct/ProductDetailsPage"; // Componente de detalles del producto
import { getRelatedProducts } from "../../util/ProductData"; // Función para obtener productos relacionados

const ProductsDetailsPage = () => {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const productId = parseInt(id); // Lo convierte a número entero
  const relatedProducts = getRelatedProducts(productId); // Obtiene productos relacionados

  return (
    <section>
      <Navbar />

      {/* Detalles del producto */}
      <div className="container single-product my-5 pt-5">
        <ProductDetailsPage />
      </div>

      {/* Productos relacionados */}
      <section id="related-products" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
          <h3>Relacionados</h3>
          <hr className="mx-auto"></hr>
          <div className="row mx-auto container-fluid pt-5">
            {relatedProducts.map((product) => (
              <Productlistcard key={product.id} productData={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default ProductsDetailsPage;
