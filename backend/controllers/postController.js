const ErrorResponse = require('../utils/errorResponse')
const Post = require('../models/PostModel')


addPost = async (req, res, next) =>
{
    try {
        const data = {
            creator: req.user._id,
            title: req.body.title,
            message: req.body.message,
            tags: req.body.tags,
            picture: req.body.picture,
        }
        const post = await Post.create(data)
        res.status(201).json({
            success: true,
            post
        })

    } catch (error) {
        next(error)
    }
}

getAllPosts = async (req, res, next) =>
{
    try {
        const posts = await Post.find().sort({ createdAt: -1}).populate('creator', 'name')
        res.status(201).json({
            success: true,
            posts
        })
    } catch (error) {
        next(error)
    }
}

likePost = async (req, res, next) =>{
    try {
        const postId = req.params.id
        const post = await Post.findByIdAndUpdate(
            { _id: postId },
            { $addToSet: {likes: req.user.id }},
            {new: true}
        )
        if(!post){
            return next(new ErrorResponse('No Post was Found', 404))
        }
        res.status(200).json({
            success: true,
            post
        })
    } catch (error) {
        next(error)
    }
}

removeLike = async(req, res, next) =>{
    try {
        const postId = req.params.id
        const post = await Post.findByIdAndUpdate(
            { _id: postId },
            { $pull: {likes: req.user.id }},
            {new: true}
        )
        if(!post){
            return next(new ErrorResponse('No Post was Found', 404))
        }
        res.status(200).json({
            success: true,
            post
        })
    } catch (error) {
        next(error)
    }
}

updatePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const currentPost = await Post.findById({_id:postId})

        const data = {
            title: req.body.title || currentPost.title,
            message: req.body.message || currentPost.message,
            tags: req.body.tags || currentPost.tags,
            picture: req.body.picture || currentPost.picture
        }

        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            data,
            { new: true }
        );

        if (updatedPost) {
            res.status(200).json({
              success: true,
              updatedPost,
            });
        }
    } catch (error) {
        next(error)
    }
  };


deletePost = async (req, res, next) =>
{
    try {
        const postId = req.params.id;
        
        const deletedPost = await Post.findByIdAndDelete({ _id: postId });
        
        if (deletedPost) {
            res.status(200).json({
                success: true,
                message: "Post deleted Successfully !",
            });

        } else {
            return next(new ErrorResponse(`Post do not exist`))

        }
    } catch (error) {
        next(error)
    }
};


module.exports = { addPost, getAllPosts, likePost, removeLike, updatePost, deletePost }




