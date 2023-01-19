const express = require("express")
const router = express.Router();
const {authentication} = require('../middlewares/authentication')

const HistorialController = require('../controllers/HistorialController')

router.post('/createHistorial',authentication,HistorialController.createHistorial)
router.get('/getHistorial',authentication,HistorialController.getHistorial)
router.delete('/deleteHistorialById/:id',authentication,HistorialController.deleteHistorialById)
router.put('/updateHistorialById/:id',authentication,HistorialController.updateHistorialById)

module.exports = router;
