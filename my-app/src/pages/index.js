import React from 'react';
import {SearchBar} from '../components/Search/index';
import data from '../components/Event/data';
import EventCard from'../components/Event/EventCard';

const Home = () => {
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
        <h1>Events</h1>
        {data.map((event) => (
          <EventCard 
          additional={event.additional}
          diet={event.diet}
          key={event.name} 
          name={event.name}
          scientificName={event.scientificName}
          size={event.size}/>

        ))}
      </div>
    </div>
  );
};

export default Home;