const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
    creator:{
        type: String,
    },
    publishedBy:{
        type: String
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
    tags:[{
        type: String,
        trim: true,
        required: [true, 'Please Provide at least one Tag']
    }],
    picture:{
        type: String,
        trim: true,
        required: [true, 'Please Provide a Picture']
    },
    likes: [{
        type: String
    }]
}, {timestamps: true})

module.exports = mongoose.model("posts", postSchema)