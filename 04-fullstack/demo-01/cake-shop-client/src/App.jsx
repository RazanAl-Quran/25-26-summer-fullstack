import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const allusers = await fetch("http://localhost:5000/api/users/");
    const allusers2 = await allusers.json();
    setUsers(allusers2);
    console.log(allusers2);
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  }

  const addUser = async (user) => {
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    fetchUsers(); // refresh the list
  };

  const updateUser = async (user) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${user.id}`, user);
      fetchUsers(); // refresh the list
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };


  return (
    <>
      <AddUserForm onAdd={addUser} />
      <UsersList users={users} onDelete={deleteUser} onUpdate={updateUser} />
    </>
  )
}

export default App;
