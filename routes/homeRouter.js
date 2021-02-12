const express = require('express');
const router = express.Router();

const {index,carrito,about} = require('../controllers/homeController');

router.get('/', index);
router.get('/compras', carrito);
router.get('/about', about)

module.exports = router;