// app.js
const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/TaskRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB with database creation option
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'taskDB', // Specify the database name here
    autoCreate: true, // Automatically create the database if it doesn't exist
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/tasks', taskRouter); // Mount task router

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
