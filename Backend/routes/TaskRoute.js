// TaskRoute.js

const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/TaskController');
const Task = require('../models/Taskmodel');

// POST route to create a new task
router.post('/', createTask);

// GET route to create a new task

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find(); // Assuming your Mongoose Task model
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle error if find fails
    }
});

module.exports = router;
