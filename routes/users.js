const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')

router.post('/createUser',UserController.createUser)
router.get('/getUsers',UserController.getUsers)
router.delete('/deleteUser/:id',UserController.deleteUser)
router.put('/updateUserById/:id',UserController.updateUserById)

module.exports = router;