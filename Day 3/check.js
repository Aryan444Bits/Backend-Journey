const express = require('express');

const app = express();

// /home => welcome to Home page
app.get("/home",(req,res)=>{
    res.send("Welcome to Home Page");
})

// /about => welcome to about page
app.get("/about",(req,res)=>{
    res.send("Welcome to About Page")
})

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
}) 