import React from 'react';
import bannerImg from '../../../assets/imgs/banner-img.png';
import './bannerHome.css';

const BannerHome = () => {
  return (
    // Contenedor principal con padding y overflow controlado
    <div className='contenedor overflow-hidden py-4'>
      
      {/* Fila de contenido con imagen + texto */}
      <div className='row d-flex aling-center'> {/* ⚠️ Revisa: debería ser 'align-center' (con 'i') */}
        
        {/* Columna de imagen */}
        <div className='col-lg-5 col-sm-12 p-3 d-flex aling-center justify-center'> {/* ⚠️ También aquí: 'align-center' */}
          <img className='w-100 h-75 ps-5' src={bannerImg} alt="Banner Informativo" /> {/* ✅ Alt agregado para accesibilidad */}
        </div>
        
        {/* Columna de texto */}
        <div className='col-lg-7 col-sm-12 p-3 d-flex flex-column justify-center aling-center'> {/* ⚠️ 'align-center' de nuevo */}
          <h2 className='fw-bolder letter tracking-tighter pb-3'>Quienes Somos</h2>
          
          <p className='text-dark parrafo ps-3 pe-3 fw-light tracking-normal text-center'>
            En <b>SmartBazzar</b>, nos apasiona la tecnología y queremos <b>acercarla a todos</b>.
            Ofrecemos una amplia <b>variedad de productos tecnológicos</b>, seleccionados por su 
            <b> calidad, innovación y precio competitivo</b>. Nuestro objetivo es brindarte una 
            <b> experiencia de compra fácil, segura y rápida</b>, para que encuentres la
            <b> tecnología que necesitas</b> al alcance de un clic.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BannerHome;
