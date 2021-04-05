
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto =>{
            return res.render('detalleProducto',{
                producto
            })
        })
        .catch(error => res.send(error))
    }
}