const ErrorResponse = require('../utils/errorResponse')
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const Post = require('../models/PostModel')
const {jwtDecode} = require('jwt-decode')

authenticate = async (req, res, next)=>{
    const authHeaders = req.headers['authorization']
    if(!authHeaders){
        return next(new ErrorResponse('You Must Log In', 401))
    }
    try{
        const token = authHeaders.split(' ')[1]
        if(token.length >= 500){
            const decoded = jwtDecode(token)
            req.user = decoded
            next()
        } else{
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            req.user = await User.findById(decoded.id)
            next()
        }
    }catch(err){
        next(new ErrorResponse('Token Has Been Changed', 401))
    }
}

isCreator = async (req, res, next)=>{
    const userId = (req.user._id || req.user.sub)
    const postId = req.params.id
    const post = await Post.findOne({_id:postId})
    
    if(!post){
        return next(new ErrorResponse('No Post was Found', 404))
    }
    const creatorId = post.publishedBy
    
    if(userId !== creatorId){
        return next(new ErrorResponse('You cant Operate on this post'))
    }
    next()

}
module.exports = {
    authenticate,
    isCreator
}