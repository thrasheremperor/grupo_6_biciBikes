const express = require('express');
const app = express();
const port = 5000;
const methodOverride = require('method-override');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const localCheck = require('./middleware/localCheck');
const cookieCheck = require('./middleware/cookieCheck');

/* ROUTER */

const homeRouter = require('./routes/homeRouter'); /*carrito,home */
const productosRouter = require('./routes/productosRouter'); /*detalle producto */
const usuariosRouter = require('./routes/usuariosRouter'); /*login y registro */
const adminRouter = require('./routes/adminRouter'); /*carga de producto */


app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/* VIEW ENGINE */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieParser());
app.use(session({
    secret : "privado",
    resave: true,
    saveUninitialized:true
}));
app.use(localCheck);
app.use(cookieCheck)

// rutas 

app.use('/', homeRouter);
app.use('/productos',productosRouter);
app.use('/usuario', usuariosRouter);
app.use('/admin', adminRouter);


app.listen(port, () => console.log(`Server running in port ${port}`))