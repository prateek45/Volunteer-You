import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <p className='us'>Luke Commins - S4532353</p>
      <p className='us'>Prateek K. Gupta - S4651752</p> 
      <p className='us'>Revanth K. Perla - S4538753</p>
      <p className='us'>Xuning Li - S4473166</p>
      <p className='us'>Jianqi Lin - S4430124</p>
      <p className='us'>Siddharth Aranya - S4463389</p>
    </div>
  );
};

export default Contact;