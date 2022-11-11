const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    fileName: {
        type: String,
        trim: true
    },    
    filePath: {
        type: String,
        trim: true
    },    
    fileURL: {
        type: String,
        trim: true
    },
    cloudinary_id: {
        type: String,
        trim: true
    },

}, { timestamps: true })

module.exports = mongoose.model('files', fileSchema)