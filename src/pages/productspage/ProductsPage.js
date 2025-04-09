import './productpage.css'; // Importa los estilos para esta página

import React from 'react';

import Searchinput from '../../components/form/searchinput/Searchinput'; // Input de búsqueda
import Navbar from '../../components/layouts/navbar/Navbar'; // Barra de navegación
import ProductsListAll from '../../components/layouts/productlistall/ProductListAll'; // Lista de todos los productos

const ProductsPage = () => {
  return (
    <section>
      <Navbar /> {/* Renderiza la barra de navegación */}
      
      <div className='searh-container relative'> {/* Contenedor de búsqueda */}
        <h2>Encuentra Tus Productos</h2>
        <Searchinput /> {/* Componente de input de búsqueda */}
      </div>
      
      <ProductsListAll /> {/* Muestra la lista completa de productos */}
    </section>
  );
};

export default ProductsPage;
