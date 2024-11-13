const mongoose = require('mongoose');

// Define the Todo schema
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"], // Fixed the typo in validation message
      trim: true, // Trim any whitespace around the title
    },
    description: {
      type: String,
      required: [true, "Please enter a description"], // Fixed validation message
      trim: true, // Trim any whitespace around the description
    },
    completed: {
      type: Boolean,
      default: false, // Default value is false (task is not completed by default)
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the current date and time when a task is created
    },
    priority: {
      type: String, // Optional field to set priority (low, medium, high)
      enum: ["Low", "Medium", "High"], // Limiting the values of priority
      default: "Medium", // Default priority is Medium
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create a model based on the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
