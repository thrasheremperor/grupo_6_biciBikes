const fs = require('fs');
const path = require ('path');
const productosBicis = path.join('data','bicis.json'); /*me lleva a la carpta data con el archivo bicis.json */

module.exports = JSON.parse(fs.readFileSync(productosBicis,'utf-8')); /*parseo el json */ 
