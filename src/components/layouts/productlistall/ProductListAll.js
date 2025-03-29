// ProductsListAll.js

import React, { useState } from 'react';

import { ProductData } from '../../../util/ProductData';
import Productlistcard from '../../cards/productlist-card/Productlistcard';
import Filter from '../filter/Filter';
import Footer from '../footer/Footer';

const ProductsListAll = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProductData);

  const handleFilterChange = ({ category, priceRange }) => {
    let updatedProducts = [...ProductData];

    // Apply category filter
    if (category) {
      updatedProducts = updatedProducts.filter((product) => product.category === category);
    }

    // Apply price range filter
    if (priceRange) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    setFilteredProducts(updatedProducts);
  };

  const categories = [...new Set(ProductData.map((product) => product.category))];

  return (
    <section>
      <div className="my-1 py-4" id="featured">
        <div className="container mt-5 py-1">
          <h3>Productos Disponibles</h3>
          <hr className="mx-0" />
        </div>
        <Filter categories={categories} onFilterChange={handleFilterChange} />

        <div className="row mx-auto container my-5">
          {filteredProducts.map((product) => {
            return <Productlistcard key={product.id} productData={product} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductsListAll;