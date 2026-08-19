import express from "express";


const app=express();

const PORT=3000;

// endpoints
// localhost:3000/books
app.get("/books",(request,response)=>{
    // send req to db
    // get the books array
    response.send("array of books");

})

// localhost:3000/test
app.get("/test",(request,response)=>{
    response.send("test test");
})



app.use((req, res) => {
    res.status(404).json({ message: "🚫 Route not found" });
});



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    
})