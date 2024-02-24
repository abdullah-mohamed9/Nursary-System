const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
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
        set: (value) => {
            return bcrypt.hashSync(value, 10);
        }
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