const mongoose = require("mongoose");
const express = require("express");
const authRoute = require('./constroller/Auth');
const superChatRoute = require('./constroller/superChat')

const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost:27017/message";
const PORT = process.env.PORT || 5000;

async function app()
{
    const app = express()
    await mongoose.connect(MONGOURL);
    console.log("mongo db connected");
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.use("/auth", authRoute);
    app.use("/superchat", superChatRoute)
    app.get("/", (req, res)=>{
        res.status(200).json({"message":"Welcome to Supper Chat API!"})
    })

    app.listen(PORT, ()=>{
        console.log('server Starting in : %d', PORT)
    })
}

app()
.catch(error=>{
    console.error(error);
})