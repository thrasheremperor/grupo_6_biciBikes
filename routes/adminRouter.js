const express = require('express');
const router = express.Router();

const {admin,crear, editar, borrar,editado} = require('../controllers/adminController');

router.get('/formCarga', admin); /*ruta a formulario de carga de producto */

router.post('/list', crear); /*ruta donde se envcuentra los productos publicados */

router.put('/:id/', editar); /*ruta para edicion de producto */

router.delete('/:id', borrar); /*ruta para borrar un producto */

router.get('/:id/edit', editado)/*ruta para productos ya editados */

/*agregar ruta por post */
module.exports = router;