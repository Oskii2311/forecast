import React from 'react';


function SearchInput({ placeholder, value, onChange }) {
  return (
    <input
      placeholder={placeholder}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
