const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
    creator:{
        type: ObjectId,
        ref: 'users'
    },
    title:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Title']
    },
    message:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Message']
    },
    tags:{
        type: String,
        trim: true,
        required: [true, 'Please Provide at least one Tag']
    },
    picture:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Picture']
    },
    likes: [{
        type: ObjectId,
        ref: 'users'
    }]
}, {timestamps: true})

module.exports = mongoose.model("posts", postSchema)