const express = require('express');
const app = express();
const port = 5000;

/* VIEW ENGINE */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

/* ROUTER */

const homeRouter = require('./routes/homeRouter');

app.use('/', homeRouter);

app.listen(port, () => console.log(`Server running in port ${port}`))

/* testing testing */