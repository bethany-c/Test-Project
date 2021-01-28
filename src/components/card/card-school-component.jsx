import React from 'react';
import './card-component-style.css'


export const SchoolCard = ({ monster }) => ( 
    <div className='card-container'>
    
    <h2> {monster.name} </h2>
    <p> {monster.schoolCode} </p>

    </div>
);
