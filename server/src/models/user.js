const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        trim: true
    },
    displayName: {
        type: String,
        trim: true
    },
    firstName:{
        type: String,
        trim: true
    },
    lastName:{
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },

}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)