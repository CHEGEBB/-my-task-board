const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Completed','In Progress','Wont Do'],
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);
