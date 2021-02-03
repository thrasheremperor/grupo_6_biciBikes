const express = require('express');
const app = express();
const port = 5000;


/* ROUTER */

const homeRouter = require('./routes/homeRouter');
const detalleRouter = require('./routes/detalleRouter');

/* VIEW ENGINE */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// rutas 

app.use('/', homeRouter);
app.use('/detalle', detalleRouter);

app.listen(port, () => console.log(`Server running in port ${port}`))