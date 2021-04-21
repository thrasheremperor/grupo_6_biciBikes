const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('ingrese su nombre'),

    check('lastName')
    .notEmpty()
    .withMessage('ingrese su apellido'),

    check('password')
    .notEmpty()
    .withMessage('La constraseña es requerida'),

    check('password')
    .isLength({
        min:7,
        max:42
        })
    .withMessage('La contraseña debe tener entre 7 a 45 caracteres'),

    check('password2').custom((value,{req})=> value !== req.body.password ? false : true)
    .withMessage('las contraseñas no coinciden'),

    /*check('birthday')
    .notEmpty()
    .withMessage('se require ser mayor de 13 años'),*/
    
    check('condicion')
    .isString('on')
    .withMessage('debe aceptar las condiciones'),

    check('email')
    .notEmpty()
    .withMessage('email requerido'),

    body('email').custom(value=>{

        return db.User.findOne({
        where:{
            email : value
        }
        })
        .then(user =>{
            if(user){
                return Promise.reject('este email no esta disponible')
            }
        })
    })
]     