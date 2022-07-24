const express = require('express');
const { getAllTodos, createTodo } = require('../Handlers/todo');

const todoRouter = express.Router();

todoRouter.get('/getAllTodos', getAllTodos);
todoRouter.post('/createTodo', createTodo);


module.exports = {todoRouter};