const ErrorResponse = require('../utils/errorResponse')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const Post = require('../models/PostModel')

authenticate = async (req, res, next)=>{
    const authHeaders = req.headers['authorization']
    if(!authHeaders){
        return next(new ErrorResponse('You Must Log In', 401))
    }
    try{
        const token = authHeaders.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(decoded.id)
        next()
    }catch(err){
        next(new ErrorResponse('Token Has Been Changed', 401))
    }
}

isCreator = async (req, res, next)=>{
    const userId = req.user.id
    const postId = req.params.id
    const post = await Post.findOne({_id:postId})
    
    if(!post){
        return next(new ErrorResponse('No Post was Found', 404))
    }
    const creatorId = post.creator.toString()
    
    if(userId !== creatorId){
        return next(new ErrorResponse('You cant Operate on this post'))
    }
    next()

}
module.exports = {
    authenticate,
    isCreator
}