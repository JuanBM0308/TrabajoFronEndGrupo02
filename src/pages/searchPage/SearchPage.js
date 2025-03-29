import {
  useEffect,
  useState,
} from 'react';

import { useLocation } from 'react-router-dom';

import SearchResult from '../../components/cards/searchResult/searchResult';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';
import { ProductData } from '../../util/ProductData';

const SearchPage = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (location.state) {
      const searchValue = ProductData.filter((data) => 
        data.name.toLowerCase().includes(location.state.searchField.toLowerCase())
      );
      setSearchResult(searchValue);
    }
  }, [location.state]);

  return (
    <section>
      <Navbar />
      <div className='my-2 py-4' id='featured'>
        <div className='container mt-5 py-5'>
          <h3>Resultados de la Búsqueda</h3>
          <hr className="mx-0"></hr>
          <div className='d-flex justify-align-content-around'>
          {searchResult.length > 0 ? (
            searchResult.map((result, index) => (
              <SearchResult key={index} productData={result} />
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
