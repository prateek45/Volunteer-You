import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import EventCard, {AllCard} from'../components/Event/EventCard';
import axios from 'axios';



const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
  axios.get('/^api/events').then(res => {
      setCards(res.data.results);      
    })  
  }, []); 
  cards.map ((test) => (
    console.log(test)
  ))

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
      <h1>Home</h1>
      <div className="wrapper">
        {cards.map((event) => (
          <EventCard 
          additional={event.additional}
          title={event.title}
          description={event.description} 
          slots={event.slots}
          contact={event.contact}
          location={event.location}/>
        ))}
      </div>
    </div>
  );
};

export default Home;