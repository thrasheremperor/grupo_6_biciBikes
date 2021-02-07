const express = require('express');
const router = express.Router();

const tarjetaController = require('../controllers/tarjetaController');

router.get('/registra/tarjeta', tarjetaController.tarjeta);
/*agregar ruta por post */
module.exports = router;