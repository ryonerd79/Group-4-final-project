const mongoose = require('mongoose');
const Student = require('./studentModel');

const parentSchema = new mongoose.Schema({
    name: String,
    email: String,
    students: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Student' }],
});

module.exports = mongoose.model('Parent', parentSchema);