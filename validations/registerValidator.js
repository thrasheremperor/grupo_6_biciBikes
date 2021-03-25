const {check, validationResult, body} = require('express-validator');
const { getUsuario} = require('../data/users');
const admins = getUsuario();

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),

    check('lastName')
    .notEmpty()
    .withMessage('El apellido de usuario es requerido'),

    check('password')
    .notEmpty()
    .withMessage('La constraseña es requerida'),

    check('password')
    .isLength({
        min:3,
        max:20
        })
    .withMessage('La contraseña debe tener entre 3 y 20 caracteres'),

    body('email').custom(value => {
        let result = admins.find(admin => admin.email === value);

        if(result){
            return false
        }else {
            return true
        }
    }).withMessage('El usuario ya está registrado!')
    
    ]


//aca tiene que ir tus validaciones