// const express = require("express")
// const userRouter = express.Router()

const {Router} = require("express")

const userRouter = Router();

userRouter.get("/",(req,res)=>{
    res.json({message:"userRouter"})
})

userRouter.post("/signup",(req,res)=>{
    res.json({message:"User signup"})
})

userRouter.post("/signin",(req,res)=>{
    res.json({message:"User signin"})
})

userRouter.get("/purchases",(req,res)=>{
    res.json({message:"User Purchases"})
})

// module.exports = {
//     userRouter:userRouter
// }

module.exports = userRouter;