const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:{
        amount:{
            type:Number,
            min:0,
        },
        currency:{
            type:String,
            default:"INR",
            enum:["INR","USD"],
        }
    },
})


const productmodel = mongoose.model('product',productSchema);

module.exports = productmodel;