const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/formulario', adminController.admin);
/*agregar ruta por post */
module.exports = router;