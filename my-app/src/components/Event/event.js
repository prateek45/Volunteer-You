import React, {useState, useEffect} from "react";
import data from "./data";
import axios from "axios";


export default function Event() {
    const eventID = window.location.href.split('/')[4];
    const [event, setEvent] = useState([]);

    useEffect(() => {
    axios.get('/^api/events').then(res => {
        const results = res.data.results;        
        setEvent(results.filter(event => event.id == eventID)[0]);     
    })  
    }, []);
    console.log(event);
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