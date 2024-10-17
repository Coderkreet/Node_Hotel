const mongoose = require('mongoose');

// Define the ManuSchema
const ManuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Name of the menu item is required
  },
  price: {
    type: Number,
    required: true, // Price is required
    min: 0 // Ensures the price is not negative
  },
  test: {
    type: String,
    enum: ["sweet", "spicy", "salty"], // Example taste categories
    required: true
  },
  isdrink: {
    type: Boolean,
    required: true, // True if the item is a drink, false otherwise
    default: false
  },
  ingredients:{
type : [String],
default :[]
  },
  num_sales: {
    type: Number,
    default: 0, // Defaults to zero sales initially
    min: 0
  }
});

// Create and export the model
module.exports = mongoose.model('Menu', ManuSchema);
