import React, { useEffect, useState } from "react";
import {SearchBar} from '../components/Search/index';
import EventCard from'../components/Event/EventCard';
import Pagi from "./pagination";
import axios from 'axios';
import 'antd/dist/antd.css';

const Home = () => {
  //Declare constant cards and its setter setCards
  const [cards, setCards] = useState([]);
  const [postsPerPage] = useState(5);
  const [postLength,setPosts] = useState([])
  //Send get request for all events from api
  useEffect(() => {
  axios.get('/api/events/').then(res => {
    //Use setCards to set cards equal to event data
    console.log(res.data.results);
    setCards(res.data.results);   
    setPosts(res.data.count);  
    })  
  }, []);
  
  //Get Next page Data
  function nextPageEvents(pageNumber) {
    console.log(pageNumber);
    let link = '/api/events?page=' + pageNumber.toString();
    axios.get(link).then(res => {
      //Use setCards to set cards equal to event data
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
 
      <div className="wrapper">
        <ul>
          {cards.map((event) => (
            <li key = {event.id} style = {{
              listStyleType: 'none'
              }} >
                
              <EventCard 
            image = {event.photo}
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
      </div>
      <div className='page'>
        <Pagi 
        totalPage = {postLength}
        postsPerPage = {postsPerPage}
        nextPageEvents = {nextPageEvents}
        />
      </div>
    </div>
  );
};

export default Home;