import React, { useState } from 'react';


const Home = () => {

    const [flag, setflag] = useState(false);

    const handleClick= ()=>{
        setflag(true)
    }

    return (

        <div>
            <h1>Dashboard</h1>

            <button onClick={handleClick}>show content</button>

            {flag && <button>Delete User</button>}
        </div>
    );
}

export default Home;
