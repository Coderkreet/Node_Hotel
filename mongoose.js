// mongoose.js
const mongoose = require('mongoose');

// MongoDB connection string
// const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase'; // Replace 'mydatabase' with your database name
const mongoURI = 'mongodb+srv://krunalbende2:szxWNs92xsoGWO0s@cluster0.1vreg.mongodb.net/'; // Replace 'mydatabase' with your database name

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
