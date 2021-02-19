const datoBicis = require('../data/bicis');

module.exports = {
    detalle :(req, res) => {
        let producto = datoBicis.find(producto =>{ 
            return producto.id === Number(req.params.id)  && producto.category === req.params.category  /*esto debe ir en el home de los productos */
        })
        res.render('detalleProducto',{ /*renderiso la vista de detalleProducto.ejs */
            title: 'detalle de producto',
            producto
        })
    }
}