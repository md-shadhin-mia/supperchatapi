const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = new Schema({
    name:{type:String, require: true},
    username:{type:String,require: true, unique: true},
    age:Number,
    gender:String,
    messages:[{
        type:Schema.Types.ObjectId,
        ref:'Message',
    }]
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);