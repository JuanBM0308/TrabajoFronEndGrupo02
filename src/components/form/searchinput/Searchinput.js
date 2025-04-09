// Importa los estilos específicos para el componente
import './searchinput.css';

// Importa React y el hook useState para manejar el estado del input
import React, { useState } from 'react';

// Importa el hook useNavigate de React Router para la navegación programática
import { useNavigate } from 'react-router-dom';

// Componente funcional Searchinput
const Searchinput = () => {
  // Estado local para guardar el texto de búsqueda
  const [searchField, setSearchField] = useState('');

  // Hook para navegar a otra ruta
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función que se ejecuta cuando cambia el valor del input
  const handleChange = (e) => {
    setSearchField(e.target.value);        // Actualiza el estado con lo que escribe el usuario
    console.log(e.target.value);           // (opcional) Imprime en consola el valor actual
  };

  // Función para redirigir a la ruta de búsqueda con el valor del input
  const redirecToSearch = () => {
    navigate('/search', { state: { searchField } }); // Navega a /search con el valor del campo de búsqueda
  };

  return (
    <div className='search-container'> {/* Contenedor del input y botón */}
      <input
        type='text'                      // Tipo de input
        className='search-input'        // Clase para estilos
        placeholder='Buscar Productos'  // Texto de ayuda dentro del input
        value={searchField}             // Valor actual del input controlado
        onChange={handleChange}         // Evento que actualiza el estado
      />
      <button onClick={redirecToSearch} className='search-button'> {/* Botón para ejecutar búsqueda */}
        Buscar
      </button>
    </div>
  );
};

// Exporta el componente para poder usarlo en otras partes
export default Searchinput;
