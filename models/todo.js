const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  item: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;