const express = require('express');
const router = express.Router();
const {login, registro, processRegistro, processLogin} = require('../controllers/usuarioController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
     cb(null,'public/images/usuarios')
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

router.get('/registro',registro); /*ruta lista */
router.post('/registro',upload.any(),processRegistro);/*ruta lista */

router.get('/login',login);/*ruta lista */
router.post('/login',processLogin);/*ruta lista */




module.exports = router;