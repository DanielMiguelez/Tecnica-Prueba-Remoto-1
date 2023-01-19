const express = require("express")
const router = express.Router();

const HistorialController = require('../controllers/HistorialController')

router.post('/createHistorial',HistorialController.createHistorial)
router.get('/getHistorial',HistorialController.getHistorial)
router.delete('/deleteHistorialById/:id',HistorialController.deleteHistorialById)
router.put('/updateHistorialById/:id',HistorialController.updateHistorialById)

module.exports = router;
