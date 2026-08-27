import React from 'react';
import { useEffect, useState } from 'react';


const UpdateForm = ({ onUpdate, currentUser }) => {

    const [name, setName] = useState(currentUser.name);
    const [age, setAge] = useState(currentUser.age);

    useEffect(() => {
        setName(currentUser.name);
        setAge(currentUser.age);
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ id: currentUser.id, name, age: parseInt(age) });
    };


    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: "10px" }} />
            <button type="submit" style={{ marginLeft: "10px" }}>Update User</button>
        </form>
    );
}

export default UpdateForm;
