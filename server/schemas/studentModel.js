const mongoose = require('mongoose');
const Grade = require('./gradeSchema');

const studentSchema = new mongoose.Schema({
    name: String,
    grades: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Grade' }],
});

module.exports = mongoose.model('Student', studentSchema);