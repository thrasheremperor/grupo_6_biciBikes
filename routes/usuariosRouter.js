const express = require('express');
const router = express.Router();

const {login, registro, processRegistro, processLogin , perfil,edit,editado, cerrar, eliminar} = require('../controllers/usuarioController');
const userCheck = require ('../middleware/userCheck');

/*VALIDACIONES */
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const ProfileEditValidator = require('../validations/ProfileEditValidator');

const upload = require('../middleware/subidaDeImagen');

/*rutas*/
/*registro*/
router.get('/registro',registro); /*ruta lista */
router.post('/registro',upload.any(),registerValidator,processRegistro);/*ruta lista */
/*logueo*/
router.get('/login',login);/*ruta lista */
router.post('/login',loginValidator,processLogin);/*ruta lista */
/*mi perfil */
router.get('/miPerfil', userCheck,perfil);
/*editar perfil */
router.get('/edit/:id', edit);
router.put('/edit/:id', ProfileEditValidator,editado);
/*cerrar secion y eliminar */
router.get('/cerrarSesion', cerrar);
router.delete('/eliminar/:id',eliminar)

  
module.exports = router;