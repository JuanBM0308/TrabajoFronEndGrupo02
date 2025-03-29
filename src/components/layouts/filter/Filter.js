import React, { useState } from 'react';

const Filter = ({ categories, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([150000, 7500000]);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPriceRange([150000, parseInt(value)]);
    onFilterChange({ priceRange: [150000, parseInt(value)] });
  };
  
  const handleCategoryFilter = (category) => {
    onFilterChange({ category });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col text-center my-2">
          <h1 className="fs-2 color">Búsqueda avanzada</h1>
          <div className="underline mx-auto mt-3"></div>
        </div>
      </div>

      <div className="row mt-3 mb-4 button-group filter-button-group">
        <div className="col d-flex justify-content-center">
          <button type="button" onClick={() => handleCategoryFilter('')} className="m-1">
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryFilter(category)}
              className="m-1"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="row mt-3  mb-4">
        <div className="col-5 d-flex m-auto justify-content-center">
          <label htmlFor="priceRange" className="me-2">
            Rango de Precio:
          </label>
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min="150000"
            max="7500000"
            step="10"
            className="form-range"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <span id="priceValue" className="ms-2">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Filter;
