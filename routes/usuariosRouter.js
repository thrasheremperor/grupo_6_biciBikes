const express = require('express');
const router = express.Router();
const {login, registro,about , user, processRegistro, processLogin} = require('../controllers/usuarioController');








//RUTAS A LOGIN Y REGISTRO

router.get('/registro',registro);
router.post('/registro',processRegistro);

router.get('/login',login);
router.post('/login',processLogin);




module.exports = router;