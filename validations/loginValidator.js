const fs = require('fs');
const {check, body}= require('express-validator');


module.exports = [
check('email')
.isEmail().withMessage('campo requerido'),

check('pass')
.notEmpty().withMessage('campo requerido')
]