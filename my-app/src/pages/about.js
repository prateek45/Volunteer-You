import React from 'react';
import './about.css'

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <p className='info'>Volunteer-You is a web platform which eases the procees to volunteer.
        Organizers can post about event on the platform and volunteer enthusiasts
        can  apply for the event, and the organizers will get in contact with them about 
        more details regarding the event.  
      </p>
    </div>
  );
};

export default About;