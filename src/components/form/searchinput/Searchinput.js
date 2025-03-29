import './searchinput.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Searchinput = () => {
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  const redirecToSearch = () => {
    navigate('/search', { state: { searchField } }); // Use the navigate function
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        className='search-input'
        placeholder='Buscar Productos'
        value={searchField}
        onChange={handleChange} 
      />
      <button onClick={redirecToSearch} className='search-button'>Buscar</button>
    </div>
  );
};

export default Searchinput;