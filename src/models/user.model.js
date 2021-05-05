const mongoose = require('mongoose')

// User schema
const userSchema = new mongoose.Schema({
    fullname: String,
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: String
})

// User model
const User = mongoose.model('User', userSchema)

module.exports = User
