const express = require("express")
const router = express.Router();

const LendingController = require('../controllers/LendingController')

router.post('/createLending',LendingController.createLending)

module.exports = router;