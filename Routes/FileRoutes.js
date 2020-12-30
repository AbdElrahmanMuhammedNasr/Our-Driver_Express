const router = require('express').Router();
const controller = require('../Controllers/FileContoller')

router.post('/addFile',controller.addNewFile)
router.post('/deleteFile/:fileId',controller.deleteFile)
router.post('/getUserFile/:email',controller.getUserFiles)

module.exports = router
