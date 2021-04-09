
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
     db.Product.findOne(req.params.id)({
           where: {
                id: req.params.id
            },
           include : [
                   {association:"product_discount"},
                   {association:"producto_make"},
                   {association:"product_color"},
                   {association: "product"} //Para traer la imagen//
                ]
        })
          
        .then(producto =>{
            return res.render('detalleProducto',{
                title :"detalle",
                producto
            })
        })
        .catch(error => res.send(error))
    }
}