const express = require('express');
const { getAllUsers, createUser, userLogin } = require('../Handlers/user');

const userRouter = express.Router();

userRouter.get('/getAllUsers', getAllUsers);
userRouter.post('/createUser', createUser);
userRouter.post('/login', userLogin);


module.exports = {userRouter};