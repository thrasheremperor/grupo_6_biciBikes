
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
     db.Product.findOne({
           where: {
                id: req.params.id
            },
           include : [
                   
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