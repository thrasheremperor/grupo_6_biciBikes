const express = require('express');
const router = express.Router();

const {login, registro, processRegistro, processLogin , perfil, eliminar, cerrar} = require('../controllers/usuarioController');
const userCheck = require ('../middleware/userCheck');


/*VALIDACIONES */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

const upload = require('../middleware/subidaDeImagen');
const path = require('path');
const multer = require('multer');


router.get('/profile',perfil);
router.get('/registro',registro); /*ruta lista */
router.post('/registro',upload.any() ,registerValidator,processRegistro);/*ruta lista */

router.get('/login',login);/*ruta lista */
router.post('/login',loginValidator,processLogin);/*ruta lista */
  


module.exports = router;