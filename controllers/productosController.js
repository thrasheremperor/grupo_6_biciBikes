//const dataBicis = require('../data/bicis');
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {

        db.Productos.findByPk(req.params.id)
        .then(producto =>{
            return res.render('detalleProducto',{
                producto
            })
        })
    }
}