import React from 'react'
import bannerImg from '../../../assets/imgs/banner-img.png';
import './bannerHome.css'

const BannerHome = () => {
  return (
    
     <div className='contenedor overflow-hidden py-4'>
        <div className='row d-flex aling-center'>
            <div className='col-lg-5 col-sm-12   p-3 d-flex aling-center justify-center'>
                <img className='w-100 h-75 ps-5' src={bannerImg}></img>
            </div>
            <div className='col-lg-7 col-sm-12 p-3 d-flex flex-column justify-center aling-center '>
                <h2 className='fw-bolder letter tracking-tighter pb-3'>Quienes Somos</h2>
                 <p className='text-dark parrafo ps-3 pe-3 fw-light tracking-normal text-center'>En <b>SmartBazzar</b>, nos apasiona la tecnología y queremos <b>acercarla a todos</b>. Ofrecemos una amplia <b> variedad de productos tecnológicos</b>, seleccionados por su <b>calidad, innovación y precio competitivo</b>. Nuestro objetivo es brindarte una <b>experiencia de compra fácil, segura y rápida</b>, para que encuentres la<b> tecnología que necesitas</b> al alcance de un clic.</p>
            </div>
           
        </div>
        </div> 
        
    
  )
}

export default BannerHome
