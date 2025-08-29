const express = require("express");
const connetToDB = require("./src/db/db")
const notemodel = require("./src/models/note.model");

const app = express();
app.use(express.json())



app.post("/notes",async(req,res)=>{
    const {title,content} = req.body;
    console.log(title,content);

    await notemodel.create({  
        title,content
    })

    res.json({
        message:"Note is Created Succesfully"
    })
})


app.get("/notes",async(req,res)=>{

    const notes = await notemodel.find()

    res.json({
        message:"Notes Fetch Successfully",
        notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const noteId = req.params.id;


    await notemodel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message:"Note Deleted Successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{

    const noteId = req.params.id;
    const {title} = req.body

    await notemodel.findOneAndUpdate({
        _id:noteId
    },{
        title:title
    })

    res.json({
        message:"Note Updated Successfully"
    })
})

connetToDB();
app.listen(3000,()=>{
    console.log("Server is Running on Port");
})