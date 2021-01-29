import React from 'react';
import { DeleteBox } from './delete-box-component';

export const DeleteConfirm = ({ DeleteBox,onDeleteChange }) => (
    <button
        className='search-box'
        placeholder='delete'
        value={onDeleteChange}
        onClick={DeleteBox}
    />
);
