const express = require('express');
const indexRoutes = require('./routes/index.route')


const app = express();

// middleware is created between app and route file
app.use((res,req,next)=>{
    console.log("this middleware is between app and route");
    next(); // use of next is if we doesn't call this then request doesn't forword
})


app.use("/",indexRoutes)

module.exports = app;