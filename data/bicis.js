const fs = require('fs');
const path = require ('path');
const productosBicis = path.join('data','bicis.json'); /*me lleva a la carpta data con el archivo bicis.json */

module.exports = {
    getBicis : () => {
        return JSON.parse(fs.readFileSync(productosBicis,'utf-8')); /*parseo el json */
    },
    setBicis: (data) => {
        fs.writeFileSync(productosBicis,JSON.stringify(data),'utf-8'); /*convierto mi json en stringify */
    }
}