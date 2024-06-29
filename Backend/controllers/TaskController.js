// TaskController.js

const Task = require('../models/Taskmodel'); // Assuming your Mongoose Task model

// Function to handle POST request to create a new task
const createTask = async (req, res) => {
    const { taskname, description, status } = req.body;

    try {
        const newTask = new Task({
            taskname,
            description,
            status
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask); // Respond with the saved task as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle error if save fails
    }
};

module.exports = {
    createTask
};
