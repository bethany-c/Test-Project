import React from 'react';
import './card-component-style.css'


export const Card = ({ monster }) => ( 
    <div className='card-container'>
    
    <h2> {monster.firstName} </h2>
    <p> {monster.lastName} </p>
    <p> {monster.school.name}</p>
    </div>
);
