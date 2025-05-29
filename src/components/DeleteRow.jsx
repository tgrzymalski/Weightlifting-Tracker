import React from 'react';
import { RiDeleteBin4Line } from 'react-icons/ri';

function DeleteButton({ onDelete }) {
    return (
        <RiDeleteBin4Line 
            onClick={onDelete} 
            style={{ cursor: 'pointer', color: '#828282' }}
            title="Delete"
        />
    );
}

export default DeleteButton;