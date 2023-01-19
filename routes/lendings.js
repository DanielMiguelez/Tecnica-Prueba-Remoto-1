const express = require("express")
const router = express.Router();
const {authentication} = require('../middlewares/authentication')

const LendingController = require('../controllers/LendingController')

router.post('/createLending',authentication,LendingController.createLending)
router.get('/getLendings',authentication,LendingController.getLendings)
router.put('/updateLendingById/:id',authentication,LendingController.updateLendingById)
router.delete('/deleteLending/:id',authentication,LendingController.deleteLending)

module.exports = router;