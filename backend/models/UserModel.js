const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your First Name'],
        maxlength: 32,
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Last Name'],
        maxlength: 32,  
    },
    name: {
        type: String,
    },
    email:{ 
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please Privide Your Email']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Please Privide Your Password'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
}, {timestamps: true})


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.signJwtToken = function() {
    return jwt.sign({id: this.id}, process.env.SECRET_KEY, {expiresIn: '1h'})
}



module.exports = mongoose.model("users", userSchema)