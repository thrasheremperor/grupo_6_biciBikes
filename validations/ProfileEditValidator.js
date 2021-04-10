const fs = require('fs');
const {check, body}= require('express-validator');


module.exports = [
check('name')
.notEmpty().withMessage('campo requerido'),

check('lastName')
.notEmpty().withMessage('campo requerido'),

]