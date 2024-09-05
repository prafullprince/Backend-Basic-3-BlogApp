// import
const Post = require("../models/Post");


// create post
exports.createPost = async (req,res)=>{
    try{
        // fetch data
        const {title,caption} = req.body;
        // create post in db
        const data = await Post.create({title,caption});
        // return res
        return res.json({
            success:true,
            data,
            message:"post created successfully"
        });
    } catch(error){
        console.log(error);
        return res.json({
            success:false,
        });
    }
};

// get all post
exports.getAllPosts = async (req,res)=>{
    try{
        // get data from db
        const data = await Post.find({}).sort({totalComments:-1}).populate({
            path:"comments",
            select:"body"
        });
        return res.json({
            success:true,
            message:"all post fetched successfully",
            data
        });
    } catch(error){
        console.log(error);
        return res.json({
            success:false
        });
    }
}


