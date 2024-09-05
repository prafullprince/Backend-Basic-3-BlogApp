const Like = require('../models/Like');
const Post = require('../models/Post');


// create like
exports.createLike = async (req,res)=>{
    try{
        // fetch post id
        const {pid} = req.params;
        // make entry of like in db
        const data = await Like.create({post:pid});
        // update post
        const updatedPost = await Post.findByIdAndUpdate(
            {_id:pid},
            {
                $push:{likes:data._id},
                $inc:{totalLikes:1},
            },
            {new:true}
        ).populate({
            path:"likes",
            select:"post"
        });

        return res.json({
            success:true,
            data,
            updatedPost
        });

    } catch(error){
        console.log(error);
        return res.json({
            success:false,
        });
    }
}
