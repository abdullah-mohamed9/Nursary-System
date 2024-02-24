const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role :  {
        type: String,
        required: true,
        enum : ['teacher', 'child', 'admin']
    },
    image : { 
        type: String,
    },
    class: {
        type: String,
        ref : 'class',
    },
})

module.exports = mongoose.model('user', usersSchema);