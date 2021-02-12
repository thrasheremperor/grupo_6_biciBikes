const express = require('express');
const router = express.Router();
const {login, registro,about} = require('../controllers/usuarioController');

router.get('/registro',registro);
router.get('/login',login);

module.exports = router;