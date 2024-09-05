const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
        required:true,
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    totalLikes:{
        type:Number,
        default:0,
        required:true
    },
    totalComments:{
        type:Number,
        default:0,
        required:true
    }
});
module.exports = mongoose.model("Post",postSchema);
