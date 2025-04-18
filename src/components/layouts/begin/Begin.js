import '../begin/begin.css';
import '../brands/brand.css';

import g3 from '../../../assets/imgs/15.jpg';
import g2 from '../../../assets/imgs/19.jpg';
import g1 from '../../../assets/imgs/2.1.jpg';

const Begin = () => {
  return (
    // Sección principal con id "brand"
   <section id="brand" >
      {/* Contenedor principal con id "new" y ancho completo */}
      <div id="new" class="w-100">
        {/* Fila para distribuir las columnas */}
        <div className="row p-0 m-0">

          {/* Primera tarjeta */}
          <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
            <img className="img-fluid " src={g1} alt="imagen de producto"></img>
            <div className="details">
              <h2 className='mx-3'>Audifonos</h2>
              <button className="text-uppercase mx-3">Comprar Ahora</button>
            </div>
          </div>

          {/* Segunda tarjeta */}
          <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
            <img className="img-fluid" src={g2} alt="imagen de producto"></img>
            <div className="details">
              <h2 className='mx-3'>smart watch</h2>
              <button class="text-uppercase">Comprar Ahora</button>
            </div>
          </div>

          {/* Tercera tarjeta */}
          <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
            <img className="img-fluid" src={g3} alt="imagen de producto"></img>
            <div className="details">
              <h2 className='mx-3'>Portatiles</h2>
              <button className="text-uppercase mx-3">Comprar Ahora</button>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
};

export default Begin;
