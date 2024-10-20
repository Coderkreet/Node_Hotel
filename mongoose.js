// mongoose.js
const mongoose = require('mongoose');

require('dotenv').config();

// MongoDB connection string
// const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase'; // Replace 'mydatabase' with your database name
const mongoURI = process.env.DB_CONECTION_URL

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// Export the connection
module.exports = mongoose;
