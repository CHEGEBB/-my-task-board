const express = require('express');
const router = express.Router();
const Task = require('../models/Taskmodel');

const { createTask } = require('../controllers/TaskController');

// POST route to create a new task
router.post('/', createTask);

// GET route to fetch the latest task
router.get('/', async (req, res) => {
    try {
        const latestTask = await Task.findOne().sort({ createdAt: -1 }); // Get the latest task based on createdAt in descending order
        res.json(latestTask);
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle error if findOne fails
    }
});

module.exports = router;
