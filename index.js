const express = require("express")
const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    return res.send("<h1> Welcome to Node Express App, Roshan Kumar Sharma </h1>")
})
app.get("/hello",(req,res)=>{
    return res.send("<h1> Hello Roshan</h1>")
})
app.get("/docker",(req,res)=>{
    return res.send("<h1> Welcome to Docker </h1>")
})

app.listen(PORT,()=>{
    console.log("App is listening on port")
})