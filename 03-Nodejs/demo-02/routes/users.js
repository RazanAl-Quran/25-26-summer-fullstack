
import express from "express";

const userRoutes = express.Router();

// users CRUD
let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

// http://localhost:5000/api/users/
userRoutes.get('/', (req, res) => {
    // get all users from DB
    // send them as a response to the client
    res.json(users);
});


// http://localhost:5000/api/users/5
userRoutes.get('/:id', (req, res) => {
    // send a req to db with id to get this specific id
    let id2 = req.params.id;
    // let oneUser = users.find((item) => {
    //     if (item.id == id2){
    //         return item;
    //     }
    // })
    // if(oneUser){
    //     res.json(oneUser);
    // } else {
    //     res.status(404).json({ message: "User not found" });
    // }

    let oneUser = users.find(item=>item.id == id2);
    (oneUser)? res.json(oneUser):res.status(404).json({ message: "User not found" });

});


export default userRoutes;