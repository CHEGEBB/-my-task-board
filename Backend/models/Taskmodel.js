// models/task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['in-progress', 'completed'],
        default: 'in-progress',
        required: true,
    },
});

module.exports = mongoose.model('Task', TaskSchema);
