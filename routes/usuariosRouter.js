const express = require('express');
const router = express.Router();

const {login, registro, processRegistro, processLogin , perfil, eliminar, cerrar} = require('../controllers/usuarioController');
const userCheck = require ('../middleware/userCheck');
const loginValidator = require('../validations/loginValidator')

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
     cb(null,'public/images/users')
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

router.get('/registro',registro); /*ruta lista */
router.post('/registro',upload.any() , processRegistro);/*ruta lista */

router.get('/login',login);/*ruta lista */
router.post('/login',loginValidator,processLogin);/*ruta lista */
  


module.exports = router;