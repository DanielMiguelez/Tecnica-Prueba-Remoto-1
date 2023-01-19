const express = require('express');
const router = express.Router();
const {authentication} = require('../middlewares/authentication')

const AccountController = require('../controllers/AccountController')

router.post('/createAccount',AccountController.createAccount)
router.get('/getAccounts',authentication,AccountController.getAccounts)
router.delete('/deleteAccount/:id',authentication,AccountController.deleteAccount)
router.put('/updateAccountById/:id',authentication,AccountController.updateAccountById)

module.exports = router;