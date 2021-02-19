const express = require('express');
const router = express.Router();
const {login, registro,about , user} = require('../controllers/usuarioController');

router.get('/registro',registro);
router.get('/login',login);
router.post('/registro/user',user)

module.exports = router;