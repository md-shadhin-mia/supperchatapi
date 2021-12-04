const {Router} = require("express");
const messageModel = require("../models/messages");
const userModel = require("../models/users");
const route= Router()

route.get("/", async(req, res)=>{
    const messages =await messageModel.find().limit(10);
    if(messages)
    {
        res.json({messages})
    }else{
        res.status(404).json({error:"No one sent messages yet"})
    }
})

route.post("/", async(req, res)=>{
    
    if(req.headers.user_id){
        const message = new messageModel(req.body);
        message.sender = req.headers.user_id;
        await message.save();
        user =await userModel.findById({_id:req.headers.user_id});
        user.messages.push(message);
        res.status(201).json({success:true, data:message})
    }else{
        res.status(201).json({success:false, error:"you have to login fist"})
    }
})

module.exports = route;