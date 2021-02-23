const express = require('express');
const router = express.Router();
/*destructuri */
const {index,carrito,productosFull, search} = require('../controllers/homeController');

router.get('/', index); /*ruta lista */
router.get('/compras', carrito); /*ruta lista */
router.get('/full', productosFull);/*ruta lista */
router.get('/buscar', search); /*aun en proceso */


module.exports = router;