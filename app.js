const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const adminModel = require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://alfiyakn:alfiyakn@cluster0.l8relji.mongodb.net/wayanadDb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/adminSignUp",(req,res)=>{
    let input=req.body
    let hashedPassword=bcrypt.hashSync(input.password,10)
    console.log(hashedPassword)
    let result=new adminModel(input)
    result.save()
    res.json({"status":"succes"})
})

app.listen(8080,()=>{
    console.log("server started")
})