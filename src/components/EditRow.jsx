import React from 'react';
import { RiEditLine  } from 'react-icons/ri';

function EditButton({ onEdit }) {
    return (
        <RiEditLine  
            onClick={onEdit} 
            style={{ cursor: 'pointer', color: '#828282' }}
            title="Edit"
        />
    );
}

export default EditButton;