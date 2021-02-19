const express = require('express');
const router = express.Router();
const {admin,crear, editar, borrar} = require('../controllers/adminController');

router.get('/formCarga', admin);
router.post('/list', crear)
router.put('/:id/', editar)
router.delete('/:id', borrar)
/*agregar ruta por post */
module.exports = router;