import React from 'react';
import {SearchBar} from '../components/Search/index';


const SearchResults = () => {
  return ( 
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column'
      }}
    > 
      <SearchBar />   
      <h1>Search Results</h1>
    </div>
  );
};

export default SearchResults;