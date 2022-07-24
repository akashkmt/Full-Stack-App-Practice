const {Todo} = require('../Database/todos');
const jwt = require('jsonwebtoken');

const getAllTodos = async (req, res) => {
    try {
        // const todos = await Todo.find().populate('user');
        const {token} = req.headers;
        let user = jwt.decode(token);
        const todos = await Todo.find({user: user.id});
        return res.status(200).send(todos);
    } catch (error) {
        // console.log('called');
        return res.status(500).send({message: error.message});
    }
}

const createTodo = async (req, res) => {
    try {
        // const todo = new Todo(req.body);
        // await todo.save();
        const {token} = req.headers;
        let user = jwt.decode(token);
        let todo = req.body;
        todo.user = user.id;
        todo = new Todo(todo);
        await todo.save();
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}



module.exports = {getAllTodos, createTodo};