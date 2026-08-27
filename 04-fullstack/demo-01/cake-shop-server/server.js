import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import cors from "cors";

import pgclient from "./db/db.js";


const app = express();
dotenv.config();


// Middlewares
app.use(cors()); //open for anyone
app.use(express.json());

// const PORT = 5000;
const PORT = process.env.PORT;


// req url/ endpoint >>>

app.get("/", (req, res) => {
    res.send("🚀 Welcome to the Express API Server!");
});

app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);


app.use((req, res) => {
    res.status(404).json({ message: "🚫 Route not found" });
});


pgclient.connect().then(() => {

    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
})


