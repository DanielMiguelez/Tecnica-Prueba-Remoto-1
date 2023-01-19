const express = require("express")
const router = express.Router();

const HistorialController = require('../controllers/HistorialController')

router.post('/createHistorial',HistorialController.createHistorial)

module.exports = router;