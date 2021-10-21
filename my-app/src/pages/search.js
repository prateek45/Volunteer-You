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
  
  //Constants and their settters, assigned values in useEffect
  const [events, setEvents] = useState([]);
  const [cards, setCards] = useState([]);   
  
  useEffect(() => {
    let link = '/^api/events?search='+info[0]+'&ordering='+info[1];
    axios.get(link).then(res => {
    console.log(res);
      setEvents(res.data);      
      setCards(res.data.results);
    })  
  }, []);
  
  return (
    <div>
      {//Placeholder, describes status of search registered by app for easy viewing
        }
      <h1> You searched for {searchVal} sorted by {sortVal}</h1>
      <h1> Found {events.count} matching results </h1>
      <div className="wrapper">
      {//For every event with id in IDArr, list it's eventCard
        }
        {events.count > 0 &&
        <ul>
          {cards.map((event) => (
            <li key = {event.id} style = {{
              listStyleType: 'none'
              }} >
                
              <EventCard 
            additional={event.additional}
            title={event.title}
            description={event.description} 
            slots={event.slots}
            contact={event.contact}
            location={event.location}
            id={event.id}/>
            </li>
          ))}    
        </ul>     
        }
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