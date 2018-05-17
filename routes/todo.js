const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models');

todoRouter
  .all('/todos', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Application/JSON');
    next();
  })
  .get('/todos', (req, res) => {
    Todo.find()
      .then(data => res.json(data))
      .catch(err => res.send(err));
  })
  .post('/todos', (req, res) => {
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.send(err));
  })
  .put('/todos', (req, res) => {
    res.statusCode = 403;
    res.send({ message: 'PUT operation not permitted on /api/todos' });
  })
  .delete('/todos', (req, res) => {
    Todo.remove()
      .then(() => {
        res.send({ message: 'Deleted all todos' });
      })
      .catch(err => res.send({ err: err }));
  })
  .get('/todos/:_id', (req, res) => {
    Todo.findById(req.params._id)
      .then(data => res.json(data))
      .catch(err => res.send(err));
  })
  .post('/todos/:_id', (req, res) => {
    res.statusCode = 403;
    res.send({ message: 'POST operation not permitted on /api/todos/:id' });
  })
  .put('/todos/:_id', (req, res) => {
    Todo.findByIdAndUpdate(req.params._id, req.body, { new: true })
      .then(data => res.json(data))
      .catch(err => err);
  })
  .delete('/todos/:_id', (req, res) => {
    Todo.findByIdAndRemove(req.params._id)
      .then(data => res.json(data))
      .catch(err => err);
  });

module.exports = todoRouter;
