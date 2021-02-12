const express = require('express');
const router = express.Router();
const {admin} = require('../controllers/adminController');

router.get('/formCarga', admin);
/*agregar ruta por post */
module.exports = router;