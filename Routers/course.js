const {Router} = require("express")
const courseRouter = Router();

courseRouter.post("/purchase",(req,res)=>{
    res.json({message:"User can purchase course from here"})
})

courseRouter.get("/preview",(req,res)=>{
    res.json({message:"Preview of courses"})
})

module.exports = courseRouter
