const express = require("express")
const router = express.Router();

const LendingController = require('../controllers/LendingController')

router.post('/createLending',LendingController.createLending)
router.get('/getLendings',LendingController.getLendings)
router.put('/updateLendingById/:id',LendingController.updateLendingById)
router.delete('/deleteLending/:id',LendingController.deleteLending)

module.exports = router;