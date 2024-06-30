const Task = require('../models/Taskmodel'); 

//Function to handle get tasks to update new tasks in frontend
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // Retrieve all tasks from the database
        res.status(200).json(tasks); // Respond with the tasks as JSON
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle error if retrieval fails
    }
};
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
