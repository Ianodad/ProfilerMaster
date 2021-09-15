import './SearchBar.css'

import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onHandleChange, onHandleSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  // const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onHandleChange(event.target.value);
  };
  //   console.log(searchTerm)
  return (
    <div className="wrap w-50 float-right">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="searchButton" onSubmit={onHandleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
