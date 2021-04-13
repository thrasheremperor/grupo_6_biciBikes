
const db = require('../database/models');

module.exports = {
    detalle :(req, res) => {
        let colores= db.color.findAll()
        let producto= db.Product.findOne({
            where : {
                id : req.params.id
            },
            include:[
                {association:"images"},
                {association: "producto_make"},
                {association:"product_discount"},
                {association:"product_color"}
            ]
        })
        Promise.all([colores, producto])
        .then(([colores,producto]) =>{
            
            return res.render('detalleProducto',{
                title: "Detalle del producto",
                producto,
                colores
            })
        })
        .catch(error => res.send(error))
    },
    filter : (req,res)=>{
         db.category.findOne({
             where : {
                 id: req.params.id
             },
             include:[
                 {association: 'category_product',
                include:[
                    {association: 'images'},
                {association:"product_discount"}]}]
         })
         .then(category =>{
             res.render('filter',{
                 productos : category.category_product,
                 title: 'Categoria',
                categoria : category.category
             })

        })
        .catch(error => console.log(error))
    }
}