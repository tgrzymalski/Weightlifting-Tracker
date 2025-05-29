import React, { useState, useEffect } from "react";
import OrderRow from "./OrderRow";

function OrderTable({ items, onDelete, onEdit }) {
    const [exercises, setExercises] = useState(items || []);

    useEffect(() => {
        setExercises(items);
    }, [items]);
    
    

    return (
        <div>
            <h2>Exercises</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((item) => (
                        <OrderRow 
                            key={item._id} 
                            item={item} 
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;
