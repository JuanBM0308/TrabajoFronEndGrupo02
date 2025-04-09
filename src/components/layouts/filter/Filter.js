// Importa React y el hook useState para manejar estados
import React, { useState } from 'react';

// Componente funcional Filter, que recibe props: categories y onFilterChange
const Filter = ({ categories, onFilterChange }) => {
  // Estado local para manejar el rango de precio seleccionado
  const [priceRange, setPriceRange] = useState([150000, 7500000]);

  // Maneja el cambio en el input de rango de precio
  const handlePriceChange = (event) => {
    const value = event.target.value; // Obtiene el valor seleccionado
    // Actualiza el estado con el nuevo rango
    setPriceRange([150000, parseInt(value)]);
    // Llama a la función de callback para actualizar el filtro
    onFilterChange({ priceRange: [150000, parseInt(value)] });
  };
  
  // Maneja el filtro por categoría
  const handleCategoryFilter = (category) => {
    // Llama al callback con la categoría seleccionada
    onFilterChange({ category });
  };

  // JSX renderizado por el componente
  return (
    <section className="container">
      {/* Título centrado */}
      <div className="row">
        <div className="col text-center my-2">
          <h1 className="fs-2 color">Búsqueda avanzada</h1>
          <div className="underline mx-auto mt-3"></div>
        </div>
      </div>

      {/* Botones de categorías */}
      <div className="row mt-3 mb-4 button-group filter-button-group">
        <div className="col d-flex justify-content-center">
          {/* Botón para mostrar todos los productos */}
          <button type="button" onClick={() => handleCategoryFilter('')} className="m-1">
            Todos
          </button>
          {/* Botones generados dinámicamente para cada categoría */}
          {categories.map((category) => (
            <button
              key={category} // Clave única requerida por React
              type="button"
              onClick={() => handleCategoryFilter(category)}
              className="m-1"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Rango de precio */}
      <div className="row mt-3  mb-4">
        <div className="col-5 d-flex m-auto justify-content-center">
          <label htmlFor="priceRange" className="me-2">
            Rango de Precio:
          </label>
          {/* Input tipo rango para seleccionar el precio máximo */}
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min="150000"
            max="7500000"
            step="10"
            className="form-range"
            value={priceRange[1]} // Solo controla el valor máximo
            onChange={handlePriceChange} // Maneja el cambio
          />
          {/* Muestra el rango de precios actual */}
          <span id="priceValue" className="ms-2">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
      </div>
    </section>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación
export default Filter;
