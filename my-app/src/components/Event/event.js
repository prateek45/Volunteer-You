import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Event() {
    //Get the id of the event from the url
    const eventID = window.location.href.split('/')[4];
    //Declare a constant event and its setter setEvent
    const [event, setEvent] = useState([]);

    //Send a get request for the events
    useEffect(() => {
    axios.get('/^api/events').then(res => {
        //Use setEvent to set event to be the event with id matching the id in url.
        const results = res.data.results;        
        setEvent(results.filter(event => event.id === eventID)[0]);     
    })  
    }, [eventID]);
    console.log(event);
    //Fill out attributes of event from event data.
    const title = event.title;
    const contact = event.contact;
    const location = event.location;
    const description = event.description;
    const slots = event.slots;
    return(
        <div className="eventwrapper"><h2>{title}</h2>
        <h4>Contact: {contact}</h4>
        <h4>Location: {location}</h4>
        <p>{description}</p>
        <h4>Slots: {slots} </h4>
    </div>
    )
};