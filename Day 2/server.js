const express = require('express');

const app = express(); // server create ho jata hai

app.get("/home",(req,res)=>{
    res.send("Welcome to Backend Home Page !!"); // here we are creating an api / 
})

app.get("/about",(req,res)=>{
    res.send("Welcome to Backed about Page !!");
})

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
})
