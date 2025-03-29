import './footer.css';

import g4 from '../../../assets/imgs/14.3.jpg';
import g3 from '../../../assets/imgs/19.2.jpg';
import g2 from '../../../assets/imgs/19.jpg';
import g1 from '../../../assets/imgs/24.1.jpg';
import g5 from '../../../assets/imgs/5.3.jpg';
import logo from '../../../assets/imgs/logo.jpg';
import pago from '../../../assets/imgs/pago.jpg';

const Footer = () => {
  return (
    <section className="mt-5 py-5 footer-container">
      <div className="row container mx-auto pt-5">
        <div className="footer-one col-lg-3 col-md-6 col-sm-12">
          <img className={logo} alt="" style={{ color: 'aliceblue' }} />
          <p className="pt-3">Ofrecemos los mejores productos a los mejores precios</p>
        </div>
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
        <div className="footer-one col-lg-3 col-md-6 col-sm-12">
          <h5 className="pb-2">Instagram</h5>
          <div className="row">
            <img src={g1} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g2} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g3} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g4} alt="" className="img-fluid w-25 h-100 m-2" />
            <img src={g5} alt="" className="img-fluid w-25 h-100 m-2" />
          </div>
        </div>
      </div>
      <div className="fa-copyright mt-5">
        <div className="row container mx-auto">
          <div className="col-lg-3 col-md-5 col-sm-12 mb-4">
            <img src={pago} alt="" />
          </div>
          <div className="copy col-lg-4 col-md-5 col-sm-12 mb-4 text-nowrap mb-2">
            <p>&copy; 2024 Ecommerce. All Rights Reserved.</p>
          </div>
          <div className=" social col-lg-3 col-md-5 col-sm-12 mb-4">
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-facebook-f"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
