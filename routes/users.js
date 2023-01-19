const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')

router.post('/createUser',UserController.createUser)
router.get('/getUsers',UserController.getUsers)

module.exports = router;