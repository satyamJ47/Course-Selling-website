const {Router} = require("express")
adminRouter = Router();


adminRouter.post("/signup",(req,res)=>{
    res.json({message:"Admin Signup"})
})

adminRouter.post("/signin",(req,res)=>{
    res.json({message:"Admin Signin"})
})

adminRouter.post("/course",(req,res)=>{
    res.json({message:"Admin add course"})
})

adminRouter.put("/course",(req,res)=>{
    res.json({message:"Admin edit course"})
})

module.exports = adminRouter