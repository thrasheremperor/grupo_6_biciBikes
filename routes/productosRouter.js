const express = require('express');
const router = express.Router();

const {detalle, filter } = require('../controllers/productosController');

router.get('/detalle/:id', detalle); /*ruta lista */
router.get('/category/:id', filter )

module.exports = router;