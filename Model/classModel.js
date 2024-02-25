const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const autoIncrement = require('mongoose-sequence')(mongoose);

const classSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    supervisor: {
        type: Number,
        required: true,
        ref: 'teacher'
    },
    children: [{
        type: Number,
        ref: 'child'
    }]
}, { _id: false })

classSchema.plugin(autoIncrement);
module.exports = mongoose.model('class', classSchema);