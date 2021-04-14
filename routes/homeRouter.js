const express = require('express');
const router = express.Router();

const {index,carrito,productosFull, search , contacto , nosotros, Mpagos} = require('../controllers/homeController');
const userCheck = require ('../middleware/userCheck');

router.get('/', index); /*ruta lista */
router.get('/compras',userCheck, carrito); /*ruta lista */
router.get('/full', productosFull);/*ruta lista  de productos visibles por cualquiera*/
router.get('/buscar', search); 
router.get('/contacto',contacto);
router.get('/nosotros', nosotros);
router.get('/cobranzas', Mpagos)



module.exports = router;