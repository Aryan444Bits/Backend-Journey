const mongoose = require("mongoose");


// server database se kaise connect hoga ye tm db.js file me likhoge

function connectToDB(){
    mongoose.connect("/Backend_Journey")
    .then(()=>{
        console.log("connected to DB");
    })
}

module.exports = connectToDB