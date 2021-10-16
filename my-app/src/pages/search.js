import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import axios from 'axios';
import EventCard, {AllCard} from'../components/Event/EventCard';

function EventResults()  {
  const info = window.location.href.split('/')[4].split('?');
  const searchVal = decodeURI(info[0]);
  const sortVal = decodeURI(info[1]);
  var results = 0;
  const [events, setEvents] = useState([]);
  const [cards, setCards] = useState([]);   
  useEffect(() => {
  axios.get('/^api/events').then(res => {
      setEvents(res.data);      
      setCards(res.data.results);
    })  
  }, []);
  var IDArr = [];
  for (var i  = 0; i < events.count; i++) {
      var data = events.results[i];
      console.log(data);
      if (data.title.includes(searchVal) || data.description.includes(searchVal) || data.organization.includes(searchVal)) {
        results = results + 1;
        IDArr.push(data.id);
        console.log(IDArr);
      }
    }
  return (
    <div>
      <h1> You searched for {searchVal} sorted by {sortVal}</h1>
      <h1> Found {results} matching results </h1>
      <div className="wrapper">
        {cards.map((event) => {
          if (IDArr.includes(event.id)) {
            IDArr.splice(IDArr.indexOf(event.id), 1);
            return(
              <EventCard 
              additional={event.additional}
              title={event.title}
              description={event.description} 
              slots={event.slots}
              contact={event.contact}
              location={event.location}/>
          )}
            return null;
        })}
      </div>
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