const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    city: {
        type: String,
        required: [true, 'Please provide email'],
    }
})

module.exports = mongoose.model('User', UserSchema);