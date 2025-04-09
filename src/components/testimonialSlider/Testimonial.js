// Importamos React
import React from 'react'

// Importamos los estilos personalizados para este componente
import "./testimonial.css"

// Componente funcional Testimonial
const Testimonial = () => {
  return (
    // Contenedor principal con clase "contenedor" y control de overflow
    <div className='contenedor overflow-hidden'>

      {/* Carrusel de Bootstrap con id único y activación automática */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        {/* Indicadores del carrusel (los puntos para cambiar de slide) */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Contenedor de los elementos del carrusel */}
        <div className="carousel-inner carrusel-class">

          {/* Primer slide activo */}
          <div className="carousel-item active">
            {/* Tarjeta de testimonio */}
            <div className='container w-75 mx-auto tarjeta'>
              <div className='row d-flex justify-content-center'>

                {/* Imagen del usuario */}
                <div className='col-2 tag'>
                  <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000' alt='User 1'></img>
                </div>

                {/* Texto del testimonio */}
                <div className='col-8 tag d-flex flex-column align-center justify-center p-3 text-center'>
                  <h5 className='my-3 fw-bold'>Logitech G203 Lightsync</h5>
                  <p className='text-dark p-2 my-1 fw-light'>
                    "Este mouse es una excelente opción para quienes buscan un periférico asequible pero de gran calidad. 
                    Su diseño ergonómico lo hace muy cómodo para largas sesiones de uso, y su sensor responde de manera precisa a los movimientos. 
                    La iluminación RGB configurable es un plus que permite personalizar la experiencia de usuario."
                  </p>

                  {/* Calificación en estrellas */}
                  <div className="star">
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                  </div>
                </div>

                {/* Fecha del testimonio */}
                <div className='col-2 tag'>
                  <h6 className='mt-4 text-black'>26 May. 2021</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Segundo slide */}
          <div className="carousel-item">
            <div className='container w-75 mx-auto tarjeta'>
              <div className='row d-flex justify-content-center'>

                {/* Imagen del usuario */}
                <div className='col-2 tag'>
                  <img src='https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='User 2'></img>
                </div>

                {/* Texto del testimonio */}
                <div className='col-8 tag d-flex flex-column align-center justify-center p-3 text-center'>
                  <h5 className='my-3 fw-bold'>HyperX Cloud II Wireless</h5>
                  <p className='text-dark p-2 my-1 fw-light'>
                    "Estos auriculares han superado mis expectativas en todos los aspectos. La calidad del sonido es increíblemente clara, 
                    con un equilibrio perfecto entre graves y agudos. La conexión inalámbrica es estable y ofrece una gran autonomía de batería. 
                    Además, la comodidad es sobresaliente, ya que las almohadillas de espuma con memoria permiten largas sesiones sin fatiga."
                  </p>

                  {/* Calificación en estrellas */}
                  <div className="star">
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star-half fa-lg"></i>
                  </div>
                </div>

                {/* Fecha del testimonio */}
                <div className='col-2 tag'>
                  <h6 className='mt-4 text-black'>12 Ago. 2022</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Tercer slide */}
          <div className="carousel-item">
            <div className='container w-75 mx-auto tarjeta'>
              <div className='row d-flex justify-content-center'>

                {/* Imagen del usuario */}
                <div className='col-2 tag'>
                  <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='User 3'></img>
                </div>

                {/* Texto del testimonio */}
                <div className='col-8 tag d-flex flex-column align-center justify-center p-3 text-center'>
                  <h5 className='my-3 fw-bold'>Razer BlackWidow V3</h5>
                  <p className='text-dark p-2 my-1 fw-light'>
                    "El teclado Razer BlackWidow V3 ofrece una experiencia de escritura y juego muy satisfactoria. 
                    Sus interruptores mecánicos brindan una respuesta táctil increíble, y la iluminación Chroma RGB es completamente personalizable."
                  </p>

                  {/* Calificación en estrellas */}
                  <div className="star">
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star fa-lg"></i>
                    <i className="fa fa-star-o fa-lg"></i>
                  </div>
                </div>

                {/* Fecha del testimonio */}
                <div className='col-2 tag'>
                  <h6 className='mt-4 text-black'>5 Dic. 2023</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón para ir al slide anterior */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Botón para ir al siguiente slide */}
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  )
}

// Exportación del componente para su uso externo
export default Testimonial
