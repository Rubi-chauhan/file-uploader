const fileModel = require('../models/fileModel')

const uploadFile = async (req, res) => {
  try {

    const filedata = await fileModel.create({ file: req.file.filename })
    res.status(200).send({ sttaus: true, message: 'file data', data: filedata })

  } catch (error) {
    res.status(400).send({ status: false, message: error.message })
  }
}

const downloadFile = async (req, res) => {
  try {
    const files = await fileModel.findOne();

    // let file = req.params.file;
    // let fileLocation = path.join('./uploads',file);
    // console.log(fileLocation);
    // res.download(fileLocation, file);

    res.status(200).json({
      status: "success",
      files,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
}

module.exports = { uploadFile, downloadFile }


// const fs = require('fs')

// exports.download = (req, res, next) => {
//   console.log('fileController.download: started')
//   const path = req.body.path
//   const file = fs.createReadStream(path)
//   const filename = (new Date()).toISOString()
//   res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
//   file.pipe(res)
// }