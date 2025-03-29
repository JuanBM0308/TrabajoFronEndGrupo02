import './productpage.css';

import React from 'react';

import Searchinput from '../../components/form/searchinput/Searchinput';
import Navbar from '../../components/layouts/navbar/Navbar';
import ProductsListAll
  from '../../components/layouts/productlistall/ProductListAll';

const ProductsPage= ()=>{
    return(
      <section>
        <Navbar/>
        <div className='searh-container relative'>
        <h2>Encuentra Tus Productos</h2>
        
        <Searchinput/>
        </div>
        <ProductsListAll/>
      </section>
    )
}
export default ProductsPage;