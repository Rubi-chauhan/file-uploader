const cloudinary = require('../../utils/cloudinary')
const fileModel = require('../models/fileModel')
const baseURL = 'http://localhost:4000/'
const path = require('path')
const fs= require('fs')



const uploadFile = async (req, res) => {
  try {
    // const file= {
    //   fileName :req.file.originalname,
    //   filePath:req.file.path,
    //   fileType: req.file.mimetype
    // }
    const result =  await cloudinary.uploader.upload(req.file.path, {upload_presets:'fileUploader'})
       let newFile= {
      fileName :req.file.originalname,
      filePath:req.file.path,
      fileURL:result.secure_url,
      cloudinary_id: result.public_id
    }
    
      const fileData = await fileModel.create(newFile)
      
    res.status(201).send({ sttaus: true, message: 'File Uploaded Successfully', data: fileData })

  } catch (error) {
    res.status(400).send({ status: false, message: error.message })
  }
}


const getAllFiles = async(req,res)=>{
  try {
    const allFiles = await fileModel.find()
    res.status(200).send(allFiles)
    
  } catch (error) {
    res.status(400).send(error.message)
  }
}


const downloadFile = async (req, res) => {
  try {
    let file = req.params.file
    let filelocation = path.join('./uploads',file);
    // let filelocation = await fileModel.findOne({fileURL:file})
    console.log(filelocation);
    res.download(filelocation, file); 
    
    // let url= req.query.fileURL
    // const response = await fileModel.findOne({fileURL:url});
    // console.log(response)

    // res.download(response);

    // res.attachment(path.join(__dirname, "uploads/jsDoc.pdf"));
   

  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = { uploadFile, getAllFiles, downloadFile }



// exports.download = (req, res, next) => {
//   console.log('fileController.download: started')
//   const path = req.body.path
//   const file = fs.createReadStream(path)
//   const filename = (new Date()).toISOString()
//   res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
//   file.pipe(res)
// }

    // let fileLocation = path.join(__dirname, '../../uploads')
    // console.log(fileLocation)
    // res.download(fileLocation+filename);