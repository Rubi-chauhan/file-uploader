
const fileModel = require('../models/fileModel')


const uploadFile = async (req, res) => {
  try {
    const file= {
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype
    }

    const filedata = await fileModel.create(file)
    res.status(201).send({ sttaus: true, message: 'File Uploaded Successfully', data: filedata })

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
    // const id = req.params.id
    // let file = req.params.file;
    const file = await fileModel.find();

    let fileLocation = path.join('./uploads',file);
    console.log(fileLocation);
    res.download(fileLocation, file);

    // res.download(file);

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