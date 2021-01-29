import React from 'react';
import './search-box-style.css';

export const SearchBox = ({ onSearchChange }) => (
    <input
        className='search-box'
        type='search'
        placeholder='search teacher ID'
        onChange={onSearchChange}
    />
);
