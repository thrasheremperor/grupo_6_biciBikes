const express = require('express');
const router = express.Router();
const {login, registro, processRegistro, processLogin} = require('../controllers/usuarioController');

router.get('/registro',registro);
router.post('/registro',processRegistro);

router.get('/login',login);
router.post('/login',processLogin);




module.exports = router;