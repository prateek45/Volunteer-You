import React, {useState, useEffect} from "react";
import './event.css';
import axios from "axios";
import {Redirect} from 'react-router-dom';

export default function Event() {
    //Get the id of the event from the url
    const eventID = window.location.href.split('/')[4];
    //Declare a constant event and its setter setEvent
    const [event, setEvent] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [shouldRedirect, setRedirect] = useState(false);

    //Send a get request for the events
    useEffect(() => {
    axios.get('/api/events').then(res => {
        //Use setEvent to set event to be the event with id matching the id in url.
        const results = res.data.results;        
        setEvent(results.filter(event => event.id == eventID)[0]);
        setLoading(false);     
    })  
    }, [eventID]);
    console.log(event);

    function volApply(e) {
        e.preventDefault();
        const roster = event.roster;
        const userID = localStorage.getItem('userID');
        if (userID == null) {
            setRedirect(true);
        } else {
            roster.push(userID);
            console.log(userID);
            console.log(roster);
            let form = new FormData();
            form.append('roster', userID);
            console.log(...form);
            axios.put('/api/events/' + eventID + '/', form).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error.response.data)
            })
        }
    }

    //Fill out attributes of event from event data.
    if (isLoading) {
        return("Loading...")
    } else{
        const photo = event.photo;
        const userType = localStorage.getItem('userType');
        const title = event.title;
        const contact = event.contact;
        const location = event.location;
        const description = event.description;
        const slots = event.slots;
        const image_Name = photo.split(/[/://]+/);
        console.log(image_Name);
        const imageDirectory = "/media/profile/" + image_Name[5];
        return(
            <div className="e">
            <img src = {imageDirectory} alt = {"Event Image"} ></img>
            <h2 className='tit'>{title}</h2>
            <h4 className='contact'>Contact: {contact}</h4>
            <h4 className='loci'>Location: {location}</h4>
            <p className='des'>{description}</p>
            <h4 className='slot'>Slots: {slots} </h4>
            {userType != 'org' && <button className="apbtn" type = 'submit' onClick = {volApply}>Apply</button>}
            {shouldRedirect && <Redirect to = '/signin' />}
        </div>
        )
    }
};