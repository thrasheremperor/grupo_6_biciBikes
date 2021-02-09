const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/compras', carritoController.carrito);
/*agregar ruta por post */
module.exports = router;