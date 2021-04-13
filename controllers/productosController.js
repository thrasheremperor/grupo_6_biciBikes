
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
     db.Product.findOne({
         where : {
             id : req.params.id
         },
         include:[
             {association:"images"}
         ]

         })
        .then(producto =>{
            
            return res.render('detalleProducto',{
                title: "Detalle producto",
                producto
            })
        })
        .catch(error => res.send(error))
    },
    filter : (req,res)=>{
         db.category.findAll({
             where: {
                 category : 'MTB'
             },
             include : [{association:'images'}]
         })
         .then(filter =>{
             return res.render('filter',{
                 title:'Bici Bikes',
                 filter
             })
         })
         .catch(error => console.log(error))
    }
}