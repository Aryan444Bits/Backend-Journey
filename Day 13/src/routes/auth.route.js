const express = require("express")
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/register', async (req, res) => {

    const { username, password } = req.body

    const isUserAlreadyExist = await userModel.findOne({
        username
    })

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"Username Already In Use"
        })
    }

    const user = await userModel.create({
        username, password
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registered Successfully",
        user
    })
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    const user = await userModel.findOne({
        username: username
    })


    if (!user) {
        return res.status(404).json({
            message: "User Account Not Found"
        })
    }

    const isPasswordValid = password === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token,{
        expires: new Date(Date.now() + 1000 * 60 * 60 *24 * 7), // 7 after 7 days token is expired
    })

    res.status(200).json({
        message: "User LoggedIn Successfully",
        user
    })
})

router.get('/user', async (req, res) => {
    const {token} = req.cookies;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorised"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id:decoded.id
        }).select("-password -__v")

        res.status(200).json({
            message:"User Data Fetched Successfully",
            user
        })
    }
    catch(err){
        return res.status(401).json({
            message:"Unauthorized - Invalid Token"
        })
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie("token")
    res.status(200).json({
        message: "User Logged Out Successfully"
    })
})




module.exports = router