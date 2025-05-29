import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditExercisePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const fetchExercise = async () => {
            const response = await fetch(`/exercises/${id}`);
            const data = await response.json();

            if (response.ok) {
                setName(data.name);
                setReps(data.reps);
                setWeight(Number(data.weight));
                setUnit(data.unit);
                setDate(data.date);
            } else {
                alert("Failed to fetch exercise data.");
                navigate('/');
            }
        };

        fetchExercise();
    }, [id, navigate]);

    const updateExercise = async () => {
        const updatedExercise = { name, reps, weight, unit, date };
        
        try {
            const response = await fetch(`/exercises/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedExercise)
            });

            if (response.ok) {
                alert('Exercise updated successfully.');
                navigate('/');
            } else {
                alert('Failed to update exercise.');
                navigate('/');
            }
        } catch (error) {
            console.error("Error while updating:", error);
            alert("An error occurred while updating the exercise.");
            navigate('/');
        }
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            <input
                type="text"
                placeholder="Enter exercise name here"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter reps here"
                value={reps}
                onChange={e => setReps(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)}
            />

            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>

            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button onClick={updateExercise}>Save Changes</button>
        </div>
    );
}

export default EditExercisePage;
