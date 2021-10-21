import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import EventCard from'../components/Event/EventCard';
import Pagination from "./pagination";
import axios from 'axios';

const Home = () => {
  //Declare constant cards and its setter setCards
  const [cards, setCards] = useState([]);
  const [postsPerPage] = useState(20);
  const [postLength,setPosts] = useState([])
  //Send get request for all events from api
  useEffect(() => {
  axios.get('/^api/events').then(res => {
    //Use setCards to set cards equal to event data
    setCards(res.data.results);   
    setPosts(res.data.count);  
    })  
  }, []);
  
  //Get Next page Data
  function nextPage(pageNumber) {
    let link = '/^api/events?page=' + pageNumber.toString();
    axios.get(link).then(res => {
      //Use setCards to set cards equal to event data
      console.log(res)
      setCards(res.data.results);   
      setPosts(res.data.count); 
      })
  }

  
  //Return default content
  //Then, add a search bar
  //For every event in cards, map it to a new event card and fill out the data.

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
      </div>
      <div>
      <Pagination 
      postsPerPage={postsPerPage}
      totalPosts={postLength}
      nextPage = {nextPage}
        />
      </div>
    </div>
  );
};

export default Home;