// Importa los estilos CSS específicos para esta tarjeta de producto
import './productlist.css';

// Importa Link desde React Router para la navegación
import { Link } from 'react-router-dom';

// Componente funcional que recibe los datos del producto como props
const Productlistcard = ({ productData }) => {
  return (
    // Contenedor del producto con clases de Bootstrap para el layout responsivo
    <div className="product text-center col-lg-3 col-md-4 col-sm-12">

      {/* Imagen del producto */}
      <img className="" src={productData.image1} alt="producto" />

      {/* Sección de estrellas (aquí son 5 estrellas fijas, todas llenas) */}
      <div className="star">
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
      </div>

      {/* Nombre del producto */}
      <h5 className="p-name">{productData.name}</h5>

      {/* Precio del producto */}
      <h4 className="p-price">{productData.price}</h4>

      {/* Enlace hacia la página de detalles del producto */}
      <Link to={`/products-details/${productData.id}`} className="buy-btn">
        {/* Botón para comprar ahora */}
        <button className="buy-btn">Comprar Ahora</button>
      </Link>

    </div>
  );
}

// Exporta el componente para su uso en otras partes de la aplicación
export default Productlistcard;
