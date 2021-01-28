import React from 'react';
import { DeleteBox } from './delete-box-component';

export const DeleteConfirm = ({ DeleteBox }) => (
    <button
    className='search-box'
    placeholder='delete teacher ID'
    onChange={DeleteBox}
    />
    
);
