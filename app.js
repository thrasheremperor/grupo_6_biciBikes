const express = require('express');
const app = express();
const port = 5000;


/* ROUTER */

const homeRouter = require('./routes/homeRouter');
const detalleRouter = require('./routes/detalleRouter');
const tarjetaRouter = require('./routes/tarjetaRouter');
const adminRouter = require('./routes/adminRouter');
const registroRouter = require('./routes/registroRouter');
const loginRouter = require('./routes/loginRouter');

/* VIEW ENGINE */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// rutas 

app.use('/', homeRouter);
app.use('/registro',registroRouter);
app.use('/producto', detalleRouter);
app.use('/admin', adminRouter);
app.use('/registroTarjeta', tarjetaRouter);
app.use('/login',loginRouter);

app.listen(port, () => console.log(`Server running in port ${port}`))