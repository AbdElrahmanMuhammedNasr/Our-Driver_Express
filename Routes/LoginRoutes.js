const router = require('express').Router()
const controller = require('../Controllers/LoginContoller')

router.post('/login',controller.loginUser)

module.exports = router
