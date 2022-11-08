const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    file: {
        type: String,
        trim: true
    }

}, { timestamps: true })

module.exports = mongoose.model('files', fileSchema)