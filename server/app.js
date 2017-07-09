const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRouter = require('./router/todos');

const MONGODB_URL = 'mongodb://localhost:27017/yusuftodo';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/todos', todoRouter);

mongoose.connect(MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(3000, function () {
    console.log('App listening on port 3000!')
    app.locals.db = db;
  });
});

