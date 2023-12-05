const express = require('express')
const router = express.Router()
const {addPost, getAllPosts, likePost, removeLike, updatePost, deletePost, getPostById} = require('../controllers/postController')
const {authenticate, isCreator} = require('../middleware/auth')

router.get('/getAll', getAllPosts)
router.get('/post/:id', getPostById)
router.post('/create', authenticate, addPost)
router.patch('/like/:id', authenticate, likePost)
router.patch('/unlike/:id', authenticate, removeLike)

router.put('/update/:id', authenticate, isCreator, updatePost)
router.delete('/delete/:id', authenticate, isCreator, deletePost)



module.exports = router