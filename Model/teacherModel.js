const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const autoIncrement = require('mongoose-sequence')(mongoose);

const teacherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: {
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
    image: {
        type: String,
    },
    role: {
        type: String,
        default: 'teacher',
        immutable: true
    }
}, { _id: false })
teacherSchema.plugin(autoIncrement);
module.exports = mongoose.model('teacher', teacherSchema);