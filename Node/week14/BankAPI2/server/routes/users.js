const express = require('express');
const userRouter = express.Router();
const bank = require('../controllers/users')


// user routes
userRouter.get('/', bank.getAllUsers)
userRouter.post('/', bank.addUser)
userRouter.get('/:id', bank.getUser)

// bank routes
userRouter.put('/cash/:id', bank.addCash)

module.exports = userRouter;