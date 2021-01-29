import React from 'react';
import './search-box-style.css';

export const DeleteBox = ({ onDeleteChange }) => (
    <input
        className='search-box'
        placeholder='delete teacher ID'
        onChange={onDeleteChange}
    />
);
