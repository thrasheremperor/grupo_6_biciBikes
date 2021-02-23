const express = require('express');
const router = express.Router();
const {login, registro, processRegistro, processLogin} = require('../controllers/usuarioController');

router.get('/registro',registro); /*ruta lista */
router.post('/registro',processRegistro);/*ruta lista */

router.get('/login',login);/*ruta lista */
router.post('/login',processLogin);/*ruta lista */




module.exports = router;