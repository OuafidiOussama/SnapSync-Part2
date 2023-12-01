const express = require('express')
const router = express.Router()


const postsRouter = require('./posts')
router.use('/posts', postsRouter)

const usersRouter = require('./users')
router.use('/user', usersRouter)

module.exports = router