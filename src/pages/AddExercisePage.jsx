import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        
        const response = await fetch('/exercises', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newExercise)
        });

        if (response.ok) {
            navigate('/');
        } else {
            const errorMessage = await response.text();
            console.error("Failed to add exercise:", errorMessage);
            alert(`Failed to add exercise: ${errorMessage}`);
            navigate('/');
        }
    
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter exercise name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />

            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>

            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;