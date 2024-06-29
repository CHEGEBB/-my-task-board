// controllers/TaskController.js
const Task = require('../models/Taskmodel');

// Fetch all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

// Fetch tasks by status
exports.getTasksByStatus = async (req, res) => {
    const { status } = req.params;

    try {
        const tasks = await Task.find({ status });
        res.json(tasks);
    } catch (error) {
        console.error(`Error fetching ${status} tasks:`, error);
        res.status(500).json({ error: `Failed to fetch ${status} tasks` });
    }
};
