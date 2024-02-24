const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const autoIncrement = require('mongoose-sequence')(mongoose);

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
},{_id:false})
usersSchema.plugin(autoIncrement);
module.exports = mongoose.model('user', usersSchema);