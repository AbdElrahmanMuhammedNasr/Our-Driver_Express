const router = require('express').Router()
const controller = require('../Controllers/UserContoller');

router.post('/createUser', controller.createUser);
router.post('/deleteUser/:email', controller.deleteUser);

module.exports = router
