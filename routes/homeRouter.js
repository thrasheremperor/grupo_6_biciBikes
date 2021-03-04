const express = require('express');
const router = express.Router();

const {index,carrito,productosFull, search} = require('../controllers/homeController');
const userCheck = require ('../middleware/userCheck');

router.get('/', index); /*ruta lista */
router.get('/compras',userCheck, carrito); /*ruta lista */
router.get('/full', productosFull);/*ruta lista */
router.get('/buscar', search); /*aun en proceso */


module.exports = router;