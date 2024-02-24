const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const classSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    // teacher: {
    //     type: String,
    //     required: true
    // },
    // children: {
    //     type: String,
    //     required: true
    // },    
})

module.exports = mongoose.model('class', classSchema);