const express = require('express');
const router = express.Router();
const {authentication, isAdmin} = require('../middlewares/authentication')

const UserController = require('../controllers/UserController')

router.post('/login',UserController.login)
router.post('/createUser',UserController.createUser)
router.get('/getUsers',authentication,UserController.getUsers)
router.delete('/deleteUser/:id',authentication,isAdmin,UserController.deleteUser)
router.put('/updateUserById/:id',authentication,isAdmin,UserController.updateUserById)



module.exports = router;