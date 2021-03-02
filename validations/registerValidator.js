const {check, validationResult, body} = require('express-validator');
const { getUsuario} = require('../data/users')
const admins = getUsuario();

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),

    check('nombre')
    .isLength({
        min:3,
        max:20
        })
    .withMessage('La contraseña debe tener un min de '),

    check('pass')
    .notEmpty()
    .withMessage('La constraseña es requerida'),

    check('pass')
    .isLength({
        min:3,
        max:8
        })
    .withMessage('Uno nombre de más de 3 letras por favor!'),

    body('nombre').custom(value => {
        let result = admins.find(admin => admin.username.toLowerCase() === value.toLowerCase().trim());

        if(result){
            return false
        }else {
            return true
        }
    }).withMessage('El usuario ya está registrado!')
    
    ]


//aca tiene que ir tus validaciones