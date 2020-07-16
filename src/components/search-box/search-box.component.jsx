import React from 'react';
import './search-box.styles.css';

export const searchBox = ({ placeholder, changesHandler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={changesHandler}
    />
  );
};
