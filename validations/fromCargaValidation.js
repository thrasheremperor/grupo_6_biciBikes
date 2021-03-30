const fs = require('fs');
const {check, body}= require('express-validator');


module.exports = [
check('name')
.notEmpty().withMessage('campo requerido'),

check('make')
.notEmpty().withMessage('campo requerido'),

check('model')
.notEmpty().withMessage('campo requerido'),

check('color')
.notEmpty().withMessage('campo requerido'),

check('price')
.notEmpty().withMessage('campo requerido'),

check('description')
.notEmpty().withMessage('campo requerido'),

check('discount')
.notEmpty().withMessage('campo requerido'),

check('category')
.notEmpty().withMessage('campo requerido'),

check('image')
.notEmpty().withMessage('campo requerido'),
]