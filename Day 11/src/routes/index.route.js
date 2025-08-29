const express = require("express");

const router = express.Router();


// middleware used between the route and API 
router.use((req,res,next)=>{
    console.log("This Middleware is between router and API");
    next();
})

router.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the Cohort API"
    })
})





module.exports = router;
