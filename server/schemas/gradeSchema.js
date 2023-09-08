const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    value: Number,
});

module.exports = mongoose.model('Grade', gradeSchema);