
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
     db.Product.findOne({
           where: {
                id: req.params.id
            },

           include : [
                {association: "product"} ,//Para traer la imagen//
                {association:"product_price"},
                {association:"product_discount"},
                {association:"producto_make"},
                {association:"product_color"},
                   
            ] 
        })
        .then(producto =>{
            return res.render('detalleProducto',{
                title: "Detalle producto",
                producto
            })
        })
        .catch(error => res.send(error))
    }
}