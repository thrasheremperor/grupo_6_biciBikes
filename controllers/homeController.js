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
    
    carrito :(req, res) => {
        res.render('user/carritoCompras', {
            title: 'Carga de Producto'
        })
        .catch(error=>res.send(error))
    },
    productosFull: (req,res)=>{
        
      db.Product.findAll({
          include: [
             {association:"images"},
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
                    [Op.like]:'%${req.query.buscador}%'
                }
            }
        })
        .then( bicis => {
            return res.render('SearchResult',{
                title: 'BiciBikes',
                bicis
            })
        })
        .catch(error => res.send(error))
    }
}
