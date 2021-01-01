const router = require('express').Router()
const controller = require('../Controllers/UserContoller');

router.post('/createUser', controller.createUser);
router.delete('/deleteUser/:email', controller.deleteUser);
router.get('/getOneUser/:email', controller.getOneUser);

module.exports = router
