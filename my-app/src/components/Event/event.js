import React from "react";
import data from "./data";
export default function event(
    { 
        title,
    description,
    slots,
    contact,
    location,   
  }
) {
    return(
        <div className="eventwrapper"><h2>{title}</h2>
        <h4>Contact: {contact}</h4>
        <h4>Location: {location}</h4>
        <p>{description}</p>
        <h4>Slots: {slots} </h4>
    </div>

)
    };