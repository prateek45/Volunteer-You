import React from 'react';
import './EventCard.css';
//import data from './data';
//import data from './components/Event/data';
import { Link } from 'react-router-dom';

export default function EventCard(
    { 
        title,
    description,
    slots,
    contact,
    location,
    id,   
  }
) {    
    return (
    <div className="eventwrapper"><h2 className='title'>{title}</h2>
        <h4>Contact: {contact}</h4>
        <h4>Location: {location}</h4>
        <p>{description}</p>
        <h4>Slots: {slots} </h4>
        <Link className='apply' to={{
                            pathname: '/event/'+id,                            
                        }}>Apply</Link>
    </div>
)}

function returnEvent(eventData) {
    var title = eventData.title;
    var description = eventData.description;
    var slots = eventData.slots;
    var contact = eventData.contact;
    var location = eventData.location;
    return {title, description, slots, contact, location};
    console.log({title, description, slots, contact, location});
}

/*
<div className="wrapper">
        <h1>Events</h1>
        {events.map((event) => (
          <EventCard 
          additional={event.additional}
          title={event.Title}
          description={event.Description} 
          slots={event.Slots}
          contact={event.Contact}
          location={event.Location}/>
        ))}
      </div>
*/
