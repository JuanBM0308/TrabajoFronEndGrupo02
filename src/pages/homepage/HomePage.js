import React from 'react';

// Importación de componentes para la página de inicio
import Banner from '../../components/banner/Banner'; // Banner promocional
import Begin from '../../components/layouts/begin/Begin'; // Sección inicial/informativa
import Footer from '../../components/layouts/footer/Footer'; // Pie de página
import Productlist from '../../components/layouts/productlist/Productlist'; // Lista de productos destacados
import Showcase from '../../components/layouts/showcase/Showcase'; // Sección destacada tipo carrusel o portada
import BannerHome from '../../components/banner/bannerHome/BannerHome'; // Banner principal en home
import Testimonial from '../../components/testimonialSlider/Testimonial'; // Slider de testimonios de usuarios

// Componente de la página de inicio
const HomePage = () => {
  return (
    <section>
      <Showcase />         {/* Sección de portada o carrusel */}
      <BannerHome />       {/* Banner principal de la página */}
      <Begin />            {/* Sección informativa/inicio */}
      <Banner />           {/* Banner promocional u oferta */}
      <Productlist />      {/* Lista de productos destacados o nuevos */}
      <Testimonial />      {/* Carrusel de testimonios de clientes */}
      <Footer />           {/* Pie de página */}
    </section>
  );
};

export default HomePage;
