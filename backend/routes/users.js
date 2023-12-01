const express = require('express')
const router = express.Router()
const {register, login, logout, userPofile} = require('../controllers/userController')
const {authenticate} = require('../middleware/auth')

router
    .route('/register')
    .post(register)

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .get(logout)

router
    .route('/me')
    .get(authenticate, userPofile)

module.exports = router