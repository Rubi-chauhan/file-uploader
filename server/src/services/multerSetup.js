const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {cloudnaryStorage} = require('multer-storage-cloudinary')

const storage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }

})
// const storage = new cloudnaryStorage({
//     cloudinary:cloudinary,

// })

const upload = multer({storage:storage})
// .single('file')

module.exports = {upload}