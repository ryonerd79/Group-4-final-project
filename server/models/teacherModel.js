const mongoose = require('mongoose');
const Student = require('./studentModel');

const teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    students: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Student' }],
});

module.exports = mongoose.model('Teacher', teacherSchema);
