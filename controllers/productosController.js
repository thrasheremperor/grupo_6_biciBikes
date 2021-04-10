
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
     db.Product.findOne({
         where : {
             id : req.params.id
         },
         include: [
             {association:"images"},
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