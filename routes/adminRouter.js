const express = require('express');
const router = express.Router();

const {cargar,creado, editar, borrar,editado,cargado} = require('../controllers/adminController');

router.get('/formCarga', cargar); /*ruta a formulario de carga de producto */
router.post('/formCarga', cargado); /*este es para almacenar los patos enviados por el formulario */

router.get('/list', creado); /*ruta donde se envcuentra los productos publicados */

router.put('/:id', editar); /*ruta para edicion de producto */
router.get('/:id', editado)/*ruta para productos ya editados */

router.delete('/:id', borrar); /*ruta para borrar un producto */



module.exports = router;