// Importa los estilos CSS específicos para este componente
import './searchResult.css';

// Importa el componente Link de react-router-dom para navegación interna
import { Link } from 'react-router-dom';

// Componente funcional que recibe como prop un objeto productData
const SearchResult = ({productData}) => {

  // Renderiza una tarjeta de producto con imagen, estrellas, nombre, precio y botón de compra
  return (
   <div className="product text-center col-lg-3 col-md-4 col-sm-12">
      {/* Muestra la imagen del producto */}
      <img className="" src={productData.image1} alt="producto" />

      {/* Muestra una calificación de 5 estrellas (fijas, no dinámicas) */}
      <div className="star">
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
      </div>

      {/* Muestra el nombre del producto */}
      <h5 className="p-name">{productData.name}</h5>

      {/* Muestra el precio del producto */}
      <h4 className="p-price">{productData.price}</h4>

      {/* Botón que lleva a la página de detalles del producto */}
      <Link to={`/products-details/${productData.id}`} className="buy-btn">
        <button className="buy-btn">Comprar Ahora</button>
      </Link>
    </div>
  );
};

// Exporta el componente para que pueda usarse en otros lugares de la app
export default SearchResult;
