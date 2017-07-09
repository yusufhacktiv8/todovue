const Todo = require('../model/todo');

exports.create = function(req, res) {
  const todo = new Todo(req.body);
  todo.save(function (err) {
    if (err) return res.status(500).send('Error when save');
    res.send({ message: 'Todo created' });
  })
};

exports.findAll = function(req, res) {
  Todo.find(function (err, todos) {
    if (err) return console.error(err);
    res.json(todos);
  });
};

exports.findOne = function(req, res) {
  const query = { _id: req.params.id };
  Todo.findOne(query, function (err, todo) {
    if (err) return res.status(404).send('Todo not found');
    res.json(todo);
  });
};

exports.update = function(req, res) {
  const todo = req.body;
  const query = { _id: req.params.id };
  Todo.findOneAndUpdate(query, { $set: { name: todo.name, price: todo.price } }, {}, (err) => {
    if (err) return res.status(500).send('Error when update');
    res.send({ message: 'Todo updated' });
  });
};

exports.delete = function(req, res) {
  const query = { _id: req.params.id };
  Todo.remove(query, (err) => {
    if (err) return res.status(404).send('Todo not found');
    res.send({ message: 'Todo deleted' });
  });
};
