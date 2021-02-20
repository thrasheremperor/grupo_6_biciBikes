const express = require('express');
const router = express.Router();
/*destructuri */
const {index,carrito,productosFull, search} = require('../controllers/homeController');

router.get('/', index);
router.get('/compras', carrito);
router.get('/full', productosFull);
router.get('/buscar', search)


module.exports = router;