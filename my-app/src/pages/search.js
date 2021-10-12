import React from 'react';
import {SearchBar} from '../components/Search/index';

const EventResults = () => {
  var info = window.location.href.split('/')[4].split('?');
  var searchVal = info[0];
  var sortVal = info[1];
  return (
    <h1> You searched for {searchVal} sorted by {sortVal}</h1>
  );
};

const SearchVanilla = () => {
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

const SearchResults = () => {
  return (
    <div>
      <SearchVanilla />
      <EventResults />
    </div>
  );
};

export default SearchResults;