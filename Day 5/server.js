const express = require("express");
const connectToDB = require('./src/db/db')

// server database se connect server.js file me

connectToDB();

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World ! ");
})


app.post("/notes",(req,res)=>{
    const {title , content} = req.body;

    console.log(title,content);
})


app.listen(3000,()=>{
    console.log("Port is reunning on port 3000");
})