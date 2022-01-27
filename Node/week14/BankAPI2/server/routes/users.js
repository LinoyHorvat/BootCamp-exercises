const express = require('express');
const userRouter = express.Router();
const users = require('../controllers/users')


// user routes
userRouter.get('/', users.getAllUsers)
userRouter.post('/', users.addUser)
userRouter.get('/:id', users.getUser)

// added for authentication
userRouter.patch('/:id', users.updateUser);
userRouter.post('/login', users.login)

// bank routes
userRouter.put('/cash/:id', users.addCash)

module.exports = userRouter;