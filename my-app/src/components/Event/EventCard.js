import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';

export default function EventCard(
    { 
        image,
        title,
        description,
        slots,
        contact,
        location,
        id,   
  }
) {    
    const image_Name = image.split(/[/://]+/);
    const imageDirectory = "/media/profile/" + image_Name[5];
    return (
    <div className="eventwrapper">
        <h2 className='title'>{title}</h2>
        <img src = {imageDirectory} alt = {"Event Image"} ></img>
        <h4>Contact: {contact}</h4>
        <h4>Location: {location}</h4>
        <p>{description}</p>
        <h4>Slots: {slots} </h4>
        <Link className='apply' to={{
                            pathname: '/event/'+id,                            
                        }}>Apply</Link>
    </div>
)}
