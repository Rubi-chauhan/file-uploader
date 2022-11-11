const express = require('express')
const router = express.Router()

const {upload} = require('../services/multerSetup')

const { uploadFile, getAllFiles, downloadFile } = require('../controllers/fileController')
const {isAuthenticated} = require('../middleware/auth')



router.post('/upload',upload.single('file'), uploadFile)
router.get('/download/:file(*)', downloadFile)
router.get('/getFiles', getAllFiles)

module.exports = router


