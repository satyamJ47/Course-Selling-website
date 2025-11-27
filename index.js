const express = require("express")
const app = express()
// const {userRouter} = require("./user")
const userRouter = require("./Routers/user")
const adminRouter = require("./Routers/admin")
const courseRouter = require("./Routers/course")

app.use(express.json())
app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/course",courseRouter)

app.get("/",(req,res)=>{
    res.json({message:"hello from course server"})
})

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000/");
})