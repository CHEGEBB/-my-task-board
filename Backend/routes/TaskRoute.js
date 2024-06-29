// TaskRoute.js

const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/TaskController');

// POST route to create a new task
router.post('/', createTask);

module.exports = router;
