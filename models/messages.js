const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const messageSchema = new Schema({
    message:{type:String, require:true},
    sender:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
}, {timestamps:true});

module.exports = mongoose.model('Message', messageSchema);