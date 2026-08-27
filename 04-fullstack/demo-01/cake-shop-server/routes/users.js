
import express from "express";
import pgclient from "../db/db.js";

const userRoutes = express.Router();



// 1- install postrgesql
// 1-2 start running the postgresql
// 2- create db
// 2-3 get the schema.sql >> then apply it on the new db by psql -f schema.sql -d dbname
// 3- connection between api server and postgresql server
// 4- code (send requests)


// http://localhost:5000/api/users/
userRoutes.get('/', async (req, res) => {
    // get all users from DB
    const users = await pgclient.query('SELECT * FROM users;');
    // send them as a response to the client
    res.json(users.rows);
});


// http://localhost:5000/api/users/5 >>> GET
userRoutes.get('/:id', async (req, res) => {
    // // send a req to db with id to get this specific id
    let id2 = req.params.id;
    // const oneUser = await pgclient.query("SELECT * FROM users WHERE id= $1", [id2]);
    // // send them as a response to the client
    // res.json(oneUser.rows[0]);


    try {
        const result = await pgclient.query("SELECT * FROM users WHERE id = $1", [id2]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }

});


// http://localhost:5000/api/users/ >> POST
// {
//   "name":"sherry",
//   "age": 8
// }
userRoutes.post('/', async (req, res) => {
    const { name, age } = req.body;

    try {
        
        let result = await pgclient.query(
            "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age]
        );

        console.log(result.rows);

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err });
    }

})


userRoutes.put("/:id", async (req, res) => {
  const { name, age } = req.body;
  try {
    const result = await pgclient.query(
      "UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *",
      [name, age, req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


userRoutes.delete("/:id", async (req, res) => {
  try {
    const result = await pgclient.query("DELETE FROM users WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


export default userRoutes;