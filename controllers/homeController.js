const fs = require('fs');
const db = require('../database/models');
const {Op} = require('sequelize');
module.exports = {
    index : (req, res) => {
        
        let productsVisited = db.Products.findAll(producto =>{
            return producto.section == 'visited'
        })
        let productsNow = db.Products.findAll(producto=>{
            return producto.section == 'now'
        })
        let productsPopular = db.Products.findAll(producto=>{
            return producto.section == 'popular'
        })
        res.render('home', {
            title : "Bici Bikes",
            productsVisited,
            productsNow,
            productsPopular
        })

    },
    carrito :(req, res) => {
        res.render('user/carritoCompras', {
            title: 'Carga de Producto'
        })
    },
    productosFull: (req,res)=>{
       db.Products.findAll()
       .then(bicis =>{
           return res.render('products',{
               bicis
           })
       })
       .catch(error => res.send(error))
    },
    search: (req, res) => { /*buscador siempre va por get */
        db.Products.findAll({ 
            where : {
                title: req.query.buscador
            }
        })
        .then( productos => {
            return res.render('SearchResult',{
                productos
            })
        })
        .catch(error => res.send(error))
    }
}
