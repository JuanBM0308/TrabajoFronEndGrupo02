// ProductsListAll.js

// Importa React y el hook useState
import React, { useState } from 'react';

// Importa los datos de productos desde una utilidad externa
import { ProductData } from '../../../util/ProductData';

// Importa el componente de tarjeta de producto
import Productlistcard from '../../cards/productlist-card/Productlistcard';

// Importa el componente de filtro de productos
import Filter from '../filter/Filter';

// Importa el componente de pie de página
import Footer from '../footer/Footer';

// Componente principal para mostrar todos los productos con opción de filtrado
const ProductsListAll = () => {
  // Estado para almacenar los productos filtrados (inicialmente todos)
  const [filteredProducts, setFilteredProducts] = useState(ProductData);

  // Maneja el cambio en los filtros aplicados
  const handleFilterChange = ({ category, priceRange }) => {
    // Clona la lista original de productos para no modificarla directamente
    let updatedProducts = [...ProductData];

    // Aplica el filtro por categoría si está definido
    if (category) {
      updatedProducts = updatedProducts.filter((product) => product.category === category);
    }

    // Aplica el filtro por rango de precios si está definido
    if (priceRange) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    // Actualiza el estado con los productos filtrados
    setFilteredProducts(updatedProducts);
  };

  // Extrae las categorías únicas de los productos para pasarlas al componente Filter
  const categories = [...new Set(ProductData.map((product) => product.category))];

  return (
    // Sección principal de la vista
    <section>
      {/* Encabezado de la sección de productos */}
      <div className="my-1 py-4" id="featured">
        <div className="container mt-5 py-1">
          <h3>Productos Disponibles</h3>
          <hr className="mx-0" />
        </div>

        {/* Componente de filtros con categorías disponibles */}
        <Filter categories={categories} onFilterChange={handleFilterChange} />

        {/* Contenedor donde se renderizan los productos filtrados */}
        <div className="row mx-auto container my-5">
          {filteredProducts.map((product) => {
            // Renderiza una tarjeta de producto para cada producto filtrado
            return <Productlistcard key={product.id} productData={product} />;
          })}
        </div>
      </div>

      {/* Pie de página de la vista */}
      <Footer />
    </section>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default ProductsListAll;
