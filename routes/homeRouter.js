const express = require('express');
const router = express.Router();

const {index,productosFull,search} = require('../controllers/homeController');
const {agregarItem,mostrarCarrito,quitarItem,vaciarCarrito} = require('../controllers/carritoController')
const userCheck = require ('../middleware/userCheck');

router.get('/', index); /*ruta lista */
router.get('/compras',userCheck)
router.get('/agregar/:id',agregarItem);
router.get('/quitar/:id',quitarItem);
router.get('/listar',mostrarCarrito) /*ruta lista */
router.get('/vaciar',vaciarCarrito);
router.get('/full', productosFull);/*ruta lista  de productos visibles por cualquiera*/
router.get('/buscar', search); 

module.exports = router;