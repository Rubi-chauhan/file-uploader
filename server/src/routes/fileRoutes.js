const fs = require('fs')
const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const multer = require('multer')




const fileStorage =
    multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {

            cb(null, file.originalname)
            // cb(null, file.originalname)
        }
    })

//* if file validations needed
// const fileFilter = (req, file, cb) => {
//     if (['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
//       cb (null, true)
//     } else {
//       cb (null, false)
//     }
//   }




//route to download a file


const { uploadFile, downloadFile } = require('../controllers/fileController')

const upload = multer({ storage: fileStorage })



router.post('/upload', upload.single('file'), uploadFile)
router.get('/download/:file(*)', downloadFile)

module.exports = router


