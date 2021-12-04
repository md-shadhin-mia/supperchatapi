const {Router} = require('express')
const userModel = require("./../models/users")
const route = Router();

// route.get("/:id",(req, res)=>{
//     let user = user.findby
//     req.params.id
// })


route.post("/new",async (req, res)=>{
    try{
        const user = new userModel(req.body);
        await user.save();
        res.status(201).json({success:true, data: user})
    }catch(error){
        res.status(400).json({success:false, error})
    }
});

route.post("/",async (req, res)=>{
        const user = await userModel.findOne({username:req.body.username});
        if(user)
            res.status(200).json({user})
        else
            res.status(404).json({error:"Username not found. Create new one for you"})
});

module.exports = route;