import React from 'react';
import { SchoolCard } from '../card/card-school-component';

import './card-list-style.css';

export const SchoolCardList = ({ monsters }) => (
    <div className='card-list'>
    {monsters.map(monster => ( //js in HTML
        // key to know which element needs to be updated
        <SchoolCard key={monster.id} monster={monster} />
    ))}
    </div>
);