const express = require('express');
const app = express();
const port = 5000;
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

/* ROUTER */

const homeRouter = require('./routes/homeRouter'); /*carrito,home,about */
const productosRouter = require('./routes/productosRouter'); /*detalle producto */
const usuariosRouter = require('./routes/usuariosRouter'); /*login y registro */
const adminRouter = require('./routes/adminRouter'); /*carga de producto */

/* VIEW ENGINE */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// rutas 

app.use('/', homeRouter);
app.use('/productos',productosRouter);
app.use('/usuario', usuariosRouter);
app.use('/admin', adminRouter);


app.listen(port, () => console.log(`Server running in port ${port}`))