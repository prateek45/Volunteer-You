import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import axios from 'axios';
import EventCard from'../components/Event/EventCard';
import './search.css'
//The function controlling what events are returned from a search.
function EventResults()  {
  //Creates array of search term and sort type as array.
  const info = window.location.href.split('/')[4].split('?');
  //Defines values and decodes from URI format.
  const searchVal = decodeURI(info[0]);
  const sortVal = decodeURI(info[1]);
  console.log(searchVal);
  console.log(sortVal);

  //Constants and their settters, assigned values in useEffect
  const [events, setEvents] = useState([]);
  const [cards, setCards] = useState([]);   
  
  useEffect(() => {
    let link = '/api/events?search='+searchVal+'&ordering='+sortVal;
    axios.get(link).then(res => {
      //Use setCards to set cards equal to event data
      setEvents(res.data);   
      setCards(res.data.results);  
      })  
    }, [searchVal,sortVal]);
    
  return (
    <div>
      {//Placeholder, describes status of search registered by app for easy viewing
        }
      <div className='res'>
      <h1> You searched for {searchVal} sorted by {sortVal}</h1>
      <h1> Found {events.count} matching results </h1>
      </div>
      <div className='wrap'>
      <div className="wrapper">
      {//For every event with id in IDArr, list it's eventCard
        }
        {cards.map((events) => {
          return(
              <EventCard 
              additional={events.additional}
              title={events.title}
              description={events.description} 
              slots={events.slots}
              contact={events.contact}
              location={events.location}
              id={events.id}/>
          )}
        //If an event isn't in the search, return null.
        )}
      </div>
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