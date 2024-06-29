// routes/TaskRoute.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

// GET /api/tasks
router.get('/', taskController.getAllTasks);

// GET /api/tasks/:status
router.get('/:status', taskController.getTasksByStatus);

module.exports = router;
