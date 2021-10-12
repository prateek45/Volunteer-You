import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import axios from 'axios';

function EventResults()  {
  const info = window.location.href.split('/')[4].split('?');
  const searchVal = decodeURI(info[0]);
  const sortVal = decodeURI(info[1]);
  var results = 0;
  const [events, setEvents] = useState([]);
  useEffect(() => {
  axios.get('/^api/events').then(res => {
      setEvents(res.data);      
    })  
  }, []);
  for (var i  = 0; i < events.count; i++) {
      var data = events.results[i];
      console.log(data);
      if (data.title.includes(searchVal) || data.description.includes(searchVal) || data.organization.includes(searchVal)) {
        results = results + 1;
      }
    }
  return (
    <div>
      <h1> You searched for {searchVal} sorted by {sortVal}</h1>
      <h1> Found {results} matching results </h1>
    </div>
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