import React from 'react';
import './EventCard.css';
//import data from './components/Event/data';

export default function EventCard(
    {additional,
  diet,
  name,
  scientificName,
  size}
) {
    
    
    return (
    <div className="eventwrapper"><h2>{name}</h2>
    <h3>{scientificName}</h3>
      <h4>{size}kg</h4>
      {(<div>{diet}</div>)}
      <a href="#" className="btn btn-outline-success"  >Read more</a>
      </div>)


}