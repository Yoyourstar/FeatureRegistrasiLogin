const express = require('express');
const userRouter = require('./user.routers');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('welcome to training mvc')
});

router.use('/', userRouter)

module.exports = router;