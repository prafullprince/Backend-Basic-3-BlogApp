const Comment = require("../models/Comment");
const Post = require("../models/Post");

// create comment
exports.createComment = async (req, res) => {
  try {
    // fetch data
    const { body } = req.body;
    // fetch post id from req ki params
    const { pid } = req.params;
    // create comment in db
    const data = await Comment.create({ body });
    // now add this comment in post schema by their objectId
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: pid },
      {
        $push:{comments:data._id},
        $inc:{totalComments:1}
      },
      { new: true }
    );
    // return res
    return res.json({
      success: true,
      data,
      updatedPost,
      message: "comment created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
    });
  }
};
