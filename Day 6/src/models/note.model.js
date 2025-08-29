const mongoose = require('mongoose');

/* title & content */ // these are the string type of content which we have to create in our note dataBase 


const noteSchema = new mongoose.Schema({ // here we can say that this is the boiler plate of schema when we have to create any schema we have to write all these code in same folder structure

    title:String,
    content:String
})

const noteMdoel = mongoose.model("note" , noteSchema) // creating a model

module.exports = noteMdoel