const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const users =require("./models/users.model")
const userRouter = require("./routes/users.route")
const app = express()
app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())


app.use("/users",userRouter)



//home route
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
})

//route not found error
app.use((req, res, next) => {
    res.status(404).json({ message: "We forget the path here" })
    
})

module.exports = app