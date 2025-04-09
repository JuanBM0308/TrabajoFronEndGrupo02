import {
  useEffect,
  useState,
} from 'react'; // Hooks de React para manejar estado y efectos

import { useLocation } from 'react-router-dom'; // Hook para acceder a la ubicación actual (incluye estado enviado por navegación)

import SearchResult from '../../components/cards/searchResult/searchResult'; // Componente que muestra un resultado de búsqueda
import Footer from '../../components/layouts/footer/Footer'; // Footer de la página
import Navbar from '../../components/layouts/navbar/Navbar'; // Navbar de la página
import { ProductData } from '../../util/ProductData'; // Datos simulados de productos (mock data)

const SearchPage = () => {
  const location = useLocation(); // Obtiene la información del estado de la ruta (ej. búsqueda enviada)
  const [searchResult, setSearchResult] = useState([]); // Estado para almacenar los resultados de búsqueda

  useEffect(() => {
    if (location.state) { // Solo filtra si hay información en el estado de la navegación
      const searchValue = ProductData.filter((data) => 
        data.name.toLowerCase().includes(location.state.searchField.toLowerCase()) // Búsqueda insensible a mayúsculas
      );
      setSearchResult(searchValue); // Actualiza el estado con los resultados filtrados
    }
  }, [location.state]); // Se vuelve a ejecutar si cambia el estado de navegación

  return (
    <section>
      <Navbar />
      <div className='my-2 py-4' id='featured'>
        <div className='container mt-5 py-5'>
          <h3>Resultados de la Búsqueda</h3>
          <hr className="mx-0"></hr>
          <div className='d-flex justify-align-content-around'>
            {searchResult.length > 0 ? ( // Si hay resultados...
              searchResult.map((result, index) => (
                <SearchResult key={index} productData={result} /> // Renderiza cada uno con el componente
              ))
            ) : (
              <p>No se encontraron resultados.</p> // Si no hay resultados
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
