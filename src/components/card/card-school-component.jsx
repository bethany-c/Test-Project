import React from 'react';
import './card-component-style.css'


export const SchoolCard = ({ monster }) => ( 
    <div className='card-container'>
    <img
        alt='monster'
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2> {monster.name} </h2>
    <p> {monster.schoolCode} </p>

    </div>
);