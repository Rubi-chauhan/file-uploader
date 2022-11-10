
const fileModel = require('../models/fileModel')


const uploadFile = async (req, res) => {
  try {

    const filedata = await fileModel.create({ file: req.file.filename })
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
    // let file = req.params.file;
    const files = await fileModel.find();

    // let fileLocation = path.join('./uploads',file);
    // console.log(fileLocation);
    // res.download(fileLocation, file);

    res.status(200).download(files);

  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = { uploadFile, getAllFiles, downloadFile }
