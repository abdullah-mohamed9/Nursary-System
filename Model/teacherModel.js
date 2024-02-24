const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    role : "teacher" ,
    image : { 
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('teacher', teacherSchema);