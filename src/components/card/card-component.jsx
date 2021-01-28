import React from 'react';
import './card-component-style.css'


export const Card = ({ monster }) => ( 
    <div className='card-container'>
    <img
        alt='monster'
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2> {monster.firstName} </h2>
    <p> {monster.lastName} </p>
    <p> {monster.school.name}</p>
    </div>
);
