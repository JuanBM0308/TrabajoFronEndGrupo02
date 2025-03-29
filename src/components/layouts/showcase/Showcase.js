import './showcase.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

const Showcase= ()=>{
    return(
      
        <section className='showcase-container'>
            <Navbar/>
            <section id="home">
    <div class="container">
      <h5>Novedades</h5>
      <h1><span>Mejores Precios</span> Esta Temporada</h1>
      <p><span>SmartBazzar</span> los mejores productos a los mejores precios</p>
      <Link to="/products"><button>Comprar Ahora</button></Link>
    </div>
  </section>
  
        </section>
    )
}
export default Showcase;