// app.js
const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/TaskRoute');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskDB';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
