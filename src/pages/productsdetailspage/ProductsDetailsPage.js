import React from 'react';

import { useParams } from 'react-router-dom';

import Productlistcard
  from '../../components/cards/productlist-card/Productlistcard';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';
import ProductDetailsPage
  from '../../components/layouts/singleproduct/ProductDetailsPage';
import { getRelatedProducts } from '../../util/ProductData';

const ProductsDetailsPage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const relatedProducts = getRelatedProducts(productId);
  
  return (
    <section>
      <Navbar />
      <div className='container single-product my-5 pt-5'>
        <ProductDetailsPage />
      </div>
      <section id="related-products" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
          <h3>Relacionados</h3>
          <hr className="mx-auto"></hr>
          <div className='row mx-auto container-fluid pt-5'>
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
