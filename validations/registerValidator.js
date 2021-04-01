const {check, validationResult, body} = require('express-validator');
/*const { getUsuario} = require('../data/users');
const admins = getUsuario();*/
const db = require('../database/models');

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

    check('password2').custom((value,{req})=> value !== req.body.password ? false : true)
    .withMessage('las contraseñas no coinciden'),

    check('birthday')
    .notEmpty()
    .withMessage('se require ser mayor de 13 años'),
    
    check('condicion')
    .isString('on')
    .withMessage('debe aceptar las condiciones'),

    body('email').custom(value => {
        /*let result = admins.find(admin => admin.email === value);
        if(result){
            return false
        }else {
            return true
        }*/
        return db.Users.findOne({
            where:{
                email: value 
            }
        })
        .then(user =>{
            if(user){
<<<<<<< HEAD
                return Promise.reject('este email ya esta registrado')
            }
            
=======
                return Promise.reject('este email ya esta registrado')}           
>>>>>>> 90e7a73917b840adb4b626f32c9da705ac0204a5
        })
    })
    ]