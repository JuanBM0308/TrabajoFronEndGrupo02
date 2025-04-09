// Importa los estilos CSS para el footer
import './footer.css';

// Importa imágenes que se utilizarán en la sección de Instagram y otros elementos del footer
import g4 from '../../../assets/imgs/14.3.jpg';
import g3 from '../../../assets/imgs/19.2.jpg';
import g2 from '../../../assets/imgs/19.jpg';
import g1 from '../../../assets/imgs/24.1.jpg';
import g5 from '../../../assets/imgs/5.3.jpg';
import logo from '../../../assets/imgs/logo.jpg';
import pago from '../../../assets/imgs/pago.jpg';

// Componente funcional Footer
const Footer = () => {
  return (
    <section className="mt-5 py-5 footer-container">
      {/* Contenedor principal con paddings y márgenes */}
      <div className="row container mx-auto pt-5">
        
        {/* Sección 1: Logo y descripción */}
        <div className="footer-one col-lg-3 col-md-6 col-sm-12">
          {/* ❌ Aquí hay un error: se está pasando una imagen como clase en vez de como `src` */}
          <img className={logo} alt="" style={{ color: 'aliceblue' }} />
          <p className="pt-3">Ofrecemos los mejores productos a los mejores precios</p>
        </div>

        {/* Sección 2: Enlaces destacados */}
        <div className="footer-one col-lg-3 col-md-6 col-sm-12">
          <h5 className="pb-2">Destacado</h5>
          <ul className="text-uppercase">
            <li><a href="#">Categoría</a></li>
            <li><a href="#">Categoría</a></li>
            <li><a href="#">Categoría</a></li>
            <li><a href="#">Categoría</a></li>
            <li><a href="#">Categoría</a></li>
          </ul>
        </div>

        {/* Sección 3: Información de contacto */}
        <div className="footer-one col-lg-3 col-md-6 col-sm-12">
          <h5 className="pb-2">Contacto</h5>
          <div>
            <h6 className="text-uppercase">Dirección</h6>
            <p>Nombre de ubicación</p>
          </div>
          <div>
            <h6 className="text-uppercase">Teléfono</h6>
            <p>4354364564</p>
          </div>
          <div>
            <h6 className="text-uppercase">Email</h6>
            <p>SmartBazzar@gmail.com</p>
          </div>
        </div>

        {/* Sección 4: Galería de Instagram */}
        <div className="footer-one col-lg-3 col-md-6 col-sm-12">
          <h5 className="pb-2">Instagram</h5>
          <div className="row">
            {/* Imágenes de Instagram */}
            <img src={g1} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g2} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g3} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g4} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g5} alt="" className="img-fluid w-25 h-100 m-2" />
          </div>
        </div>
      </div>

      {/* Pie inferior con métodos de pago, copyright y redes sociales */}
      <div className="fa-copyright mt-5">
        <div className="row container mx-auto">
          {/* Imagen de métodos de pago */}
          <div className="col-lg-3 col-md-5 col-sm-12 mb-4">
            <img src={pago} alt="" />
          </div>

          {/* Texto legal/copyright */}
          <div className="copy col-lg-4 col-md-5 col-sm-12 mb-4 text-nowrap mb-2">
            <p>&copy; 2024 Ecommerce. All Rights Reserved.</p>
          </div>

          {/* Enlaces a redes sociales con íconos */}
          <div className="social col-lg-3 col-md-5 col-sm-12 mb-4">
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-facebook-f"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
