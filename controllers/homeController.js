const fs = require('fs');
const db = require('../database/models');
const {Op} = require('sequelize');
module.exports = {
    index : (req, res) => {
       let productsVisited = db.section.findOne({
           where : {
               id:1
            },
           include : [
                {association : "seccion_products",
                   include:[
                 {association:"product_discount"},
                 {association: "images"}
                    ]
                },
            ]
        })
       let productsNow = db.section.findOne({
           where : {
              id:2
            },
           include : [
                {association : "seccion_products",
                 include:[
                     {association:"product_discount"},
                     {association: "images"}
                    ]
                }
            ]
        })
               
        let productsPopular = db.section.findOne({
            where : {
               id:3
             },
            include : [
                 {association : "seccion_products",
                  include:[
                      {association:"product_discount"},
                      {association: "images"}
                     ]
                 }
             ]
        })
        Promise.all([productsVisited,productsNow,productsPopular])
        .then(([productsVisited,productsNow,productsPopular])=>{
            
            res.render('home',{
            title: "Bici Bikes",
            productsVisited,
            productsNow,
            productsPopular
            })
        
        })
    },
    
    productosFull: (req,res)=>{
        
      db.Product.findAll({
          include: [
             {association:"images"},
             {association:"product_discount"}
         ]
      })
      .then(productos=>{
            return res.render('products',{
               productos,
               title: "Todos los productos"
              
            })
        })
       .catch(error=>res.send(error))
    },

    search : (req, res) => { /*buscador siempre va por get */
        db.Product.findAll({ 
            where : {

                name: {
                    [Op.like]:`%${req.query.buscador}%`
                },
               
       
            },
            include:[
                {association:"images"},
                {association: 'producto_make'},
                {association:'product_discount'},
                {association:'product_color'}
            ]
        })
        .then( productos => {
            
            return res.render('products',{
                title: 'Resultados de la búsqueda',
                productos
            })
        })
        .catch(error => res.send(error))
    },


    carrito :(req, res) => {
        db.Product.findAll()
        .then(products=>{
        res.render('product', {
            title: 'Carga de Producto'
        });

        })
        .catch(error=>{res.send(error)})
    }
}
