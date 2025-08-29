const express = require('express');


const app = express();

app.use(express.json()); // middleware 

/*
notes : 
{
title : "",
description : ""
}
*/

let notes = [];

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.json({
        message : "Note Added Succesfully",
        notes: notes
    })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})