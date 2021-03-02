const express = require('express');
const router = express.Router();

const {login, registro, processRegistro, processLogin , profileAdmin, eliminar, fatality} = require('../controllers/usuarioController');

/*VALIDACIONES */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

const upload = require('../middleware/subidaDeImagen');
const path = require('path');
const multer = require('multer');


router.get('/profile',profileAdmin);
router.get('/registro',registro); /*ruta lista */
router.post('/registro',upload.any(),registerValidator,processRegistro);/*ruta lista */

router.get('/login',login);/*ruta lista */
router.post('/login',loginValidator,processLogin);/*ruta lista */

//*router.get('/perfil',userCheck,perfil);*/

router.delete('/delete/:id', eliminar);

router.get('/cerrar', fatality)




module.exports = router;