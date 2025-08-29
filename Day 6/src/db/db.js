const mongoose = require("mongoose");

function connetToDB(){
    mongoose.connect("Backend_Journey")
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = connetToDB