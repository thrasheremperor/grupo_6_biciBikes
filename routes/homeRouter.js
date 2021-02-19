const express = require('express');
const router = express.Router();

const {index,carrito,productosFull} = require('../controllers/homeController');

router.get('/', index);
router.get('/compras', carrito);
router.get('/full', productosFull);


module.exports = router;