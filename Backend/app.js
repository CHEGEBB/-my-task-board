
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

// Connect to MongoDB

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
 .then(() => console.log('MongoDB connected...'))
 .catch((err) => console.error(err));
 
 // Middleware
 app.use(express.json());

 // Routes
 app.use('/api/tasks', require('./routes/tasks'));

 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 module.exports = app;
 
