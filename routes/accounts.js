const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/AccountController')

router.post('/createAccount',AccountController.createAccount)
router.get('/getAccounts',AccountController.getAccounts)
router.delete('/deleteAccount/:id',AccountController.deleteAccount)

module.exports = router;