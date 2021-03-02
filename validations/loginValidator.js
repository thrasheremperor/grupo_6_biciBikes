const fs = require('fs');
const {check, body}= require('express-validator');

const users_db = JSON.parse(fs.readFileSync('/data/users.json','utf-8'));

module.exports = [
check('email')
.isEmail().withMessage('campo requerido'),

check('pass')
.notEmpty().withMessage('campo requerido')
]