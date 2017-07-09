const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  decription: String,
  status: Boolean,
}, {
  timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;