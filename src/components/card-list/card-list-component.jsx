import React from 'react';
import { Card } from '../card/card-component';

import './card-list-style.css';

export const CardList = ({ monsters }) => (
    <div className='card-list'>
    {monsters.map(monster => ( 
        // key to know which element needs to be updated
        <Card key={monster.id} monster={monster} />
    ))}
    </div>
);
