

import React, { useState } from 'react';
import { Input } from 'antd';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Pass the search text to the parent component (App) to perform the filtering
    onSearch(searchText);
  };

  return (
    <div>
      <Input
        placeholder="Search for food"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};


export default Search;
