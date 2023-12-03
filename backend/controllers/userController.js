const User = require('../models/UserModel')
const ErrorResponse = require('../utils/errorResponse')


register = async(req, res, next)=>{
    const {email} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        return next(new ErrorResponse('Email Already Registered', 400))
    }
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        name: req.body.firstName+' '+req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    try {
        const user = await User.create(data)
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
}

login = async (req, res, next)=>{
    try {
        const {email, password} = req.body
        if(!email){
            return next(new ErrorResponse('Please Provide Your Email Address', 403))
        }
        if(!password){
            return next(new ErrorResponse('Please Provide A Password', 403 ))
        }
        const user = await User.findOne({email})
        if(!user){
            return next(new ErrorResponse('Invalid Email Or Password', 400))
        }
        const isValid = await user.comparePassword(password)
        if(!isValid){
            return next(new ErrorResponse('Invalid Email Or Password', 400))
        }

        sendToken(user, 200, res)
    } catch (error) {
        next(error)
    }
}

const sendToken = async (user, statusCode, res)=>{
    const token = await user.signJwtToken();
    res.status(statusCode).json({
        success: true,
        user: user,
        jwtToken: token
    })
}

logout = (req,res, next)=>{
    res.status(200).json({
        success: true,
        message: "logout Successfully"
    })
}

userPofile = async (req, res, next)=>{
    const user = await User.findById(req.user.id).select('-password')
    res.status(200).json({
        success: true,
        user
    })
}

module.exports = {register, login, logout, userPofile}