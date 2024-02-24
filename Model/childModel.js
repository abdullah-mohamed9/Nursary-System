 const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const childSchema = mongoose.Schema({
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
        required: true,
    },
    role : "child",
    image : { 
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true,
        
    },
})

module.exports = mongoose.model('child', childSchema);