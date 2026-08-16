import { useState } from "react";

const PeopleForm = ({addPerson}) => {


    // Form fields
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPerson = {
            name,
            height,
            favoritePet,
            gender,
        };

        addPerson(newPerson);

        // Clear form
        setName("");
        setHeight("");
        setFavoritePet("");
        setGender("");


    }

    return (

        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add a Person</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Favorite Pet"
                    value={favoritePet}
                    onChange={(e) => setFavoritePet(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ marginLeft: "10px" }}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>
          
        </div>
    );
}

export default PeopleForm;
