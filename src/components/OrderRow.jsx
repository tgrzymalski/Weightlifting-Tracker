import React, { useState } from 'react';
import DeleteButton from './DeleteRow'
import EditButton from './EditRow';

function OrderRow({ item, onDelete, onEdit }) {

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.reps}</td>
            <td>{item.weight}</td>
            <td>{item.unit}</td>
            <td>{item.date}</td>
            <td>
                <EditButton onEdit={() => onEdit(item._id)}/>
            </td>
            <td>
                <DeleteButton onDelete={() => onDelete(item._id)}/>
            </td>
        </tr>
    );
}

export default OrderRow;
