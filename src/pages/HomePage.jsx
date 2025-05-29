import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderTable from '../components/OrderTable';



function HomePage() {
    const [exercises, setExercises] = useState([]);
    
    const navigate = useNavigate();

    const loadExercises = async () => {
            const response = await fetch('/exercises');
            const data = await response.json();
            setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    const handleDelete = async (id) => {        
        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
        const updatedExercises = exercises.filter(item => item._id !== id);
        setExercises(updatedExercises);
    };

    const handleEdit = (id) => {
        navigate(`/edit-exercise/${id}`);
    };

    return (
        <>
            <OrderTable items={exercises} onDelete={handleDelete} onEdit={handleEdit}/>
        </>
    );
}

export default HomePage;
