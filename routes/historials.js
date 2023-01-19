const express = require("express")
const router = express.Router();
const {authentication,isAdmin} = require('../middlewares/authentication')

const HistorialController = require('../controllers/HistorialController')

router.post('/createHistorial',authentication,HistorialController.createHistorial)
router.get('/getHistorial',authentication,HistorialController.getHistorial)
router.delete('/deleteHistorialById/:id',authentication,isAdmin,HistorialController.deleteHistorialById)
router.put('/updateHistorialById/:id',authentication,isAdmin,HistorialController.updateHistorialById)

module.exports = router;
