import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import axios from 'axios';
import EventCard from'../components/Event/EventCard';

//The function controlling what events are returned from a search.
function EventResults()  {
  //Creates array of search term and sort type as array.
  const info = window.location.href.split('/')[4].split('?');
  //Defines values and decodes from URI format.
  const searchVal = decodeURI(info[0]);
  const sortVal = decodeURI(info[1]);
  //Iterable variable for number of results.
  var results = 0;
  //Constants and their settters, assigned values in useEffect
  const [events, setEvents] = useState([]);
  const [cards, setCards] = useState([]);   
  useEffect(() => {
  axios.get('/^api/events').then(res => {
      setEvents(res.data);      
      setCards(res.data.results);
    })  
  }, []);
  //Array of event ID's for pushing later.
  var IDArr = [];
  //For every event in the database, check if the title, description or organisation includes the search term.
  for (var i  = 0; i < events.count; i++) {
      var data = events.results[i];
      console.log(data);
      if (data.title.includes(searchVal) || data.description.includes(searchVal) || data.organization.includes(searchVal)) {
        //If yes, iterate the number of results and push the corresponding event id to IDArr.
        results = results + 1;
        IDArr.push(data.id);
      }
    }
  return (
    <div>
      {//Placeholder, describes status of search registered by app for easy viewing
        }
      <h1> You searched for {searchVal} sorted by {sortVal}</h1>
      <h1> Found {results} matching results </h1>
      <div className="wrapper">
      {//For every event with id in IDArr, list it's eventCard
        }
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
              location={event.location}
              id={event.id}/>
          )}
        //If an event isn't in the search, return null.
            return null;
        })}
      </div>
    </div>
  );
};

//The default html of the search page.
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

//Super function that returns both vanilla and searchable content
const SearchResults = () => {
  return (
    <div>
      <SearchVanilla />
      <EventResults />
    </div>
  );
};

export default SearchResults;