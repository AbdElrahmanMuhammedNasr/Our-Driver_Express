const router = require('express').Router();
const controller = require('../Controllers/FileContoller')

router.post('/addFile',controller.addNewFile)
router.delete('/deleteFile/:fileId',controller.deleteFile)
router.get('/getUserFile/:email',controller.getUserFiles)
router.get('downloadFile/:id', controller.downloadFile)

module.exports = router
