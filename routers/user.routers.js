const express = require('express');
const UserExpressController = require('../controller/user.express.controller');
const userRouter = express.Router();
const userExpressController = new UserExpressController();

userRouter.post('/registrasi', userExpressController.registration)

module.exports = userRouter;