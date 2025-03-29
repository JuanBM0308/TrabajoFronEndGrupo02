import './searchResult.css';

import { Link } from 'react-router-dom';

const SearchResult = ({productData}) => {


  return (
   <div className="product text-center col-lg-3 col-md-4 col-sm-12">
      <img className="" src={productData.image1} alt="producto" />
      <div className="star">
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
      </div>
      <h5 className="p-name">{productData.name}</h5>
      <h4 className="p-price">{productData.price}</h4>
      <Link to={`/products-details/${productData.id}`}className="buy-btn">
        <button className="buy-btn" >Comprar Ahora</button>
        </Link>
    </div>
  );
};

export default SearchResult;