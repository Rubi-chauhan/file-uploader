const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleID: {
        type: String,
        trim: true
    },
    fullName: {
        type: String,
        trim: true
    },
    email: [{
        type: String,
        trim: true
    }],
    picture: [{
        type: String,
        trim: true
    }],

}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)