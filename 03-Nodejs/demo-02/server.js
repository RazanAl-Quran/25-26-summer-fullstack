import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";


const app = express();
dotenv.config();

// const PORT = 5000;
const PORT = process.env.PORT;


// req url/ endpoint >>>

app.get("/", (req, res) => {
    res.send("🚀 Welcome to the Express API Server!");
});

app.use("/api/users", userRoutes);


app.use((req, res) => {
    res.status(404).json({ message: "🚫 Route not found" });
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

