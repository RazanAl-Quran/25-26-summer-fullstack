import { useEffect, useState } from 'react';
import UpdateForm from './UpdateForm';

const UsersList = ({ users, onDelete, onUpdate }) => {

    const [updatestatus, setUpdatestatus] = useState(false);
    const [currentUser, setCurrentUser] = useState({});


    return (

        <>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>actions
                        </th>
                    </tr>
                </thead>


                <tbody>

                    {users.map((user, idx) => {


                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={() => {setUpdatestatus(true); setCurrentUser(user)}}>Edit</button>
                                    <button onClick={() => { onDelete(user.id) }}>Delete</button>

                                </td>
                            </tr>
                        );
                    })}

                </tbody>

            </table >

            {updatestatus && <UpdateForm  onUpdate={onUpdate} currentUser={currentUser} />}

        </>

    );
};


export default UsersList;
