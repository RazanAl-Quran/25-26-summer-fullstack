import React from 'react';

const PeopleList = ({people}) => {
    return (
        <>
        <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
            {people.map((person, index) => {
                const emoji = person.gender === "Male" ? "👨" : "👩";
                return (
                    <li key={index}>
                        {emoji} <strong>{person.name}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
                    </li>
                );
            })}
        </ul>

       
        </>
    );
}

export default PeopleList;
