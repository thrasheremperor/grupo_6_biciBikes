const fs = require('fs');
const db = require('../database/models');
const {Op} = require('sequelize');
module.exports = {
    index : (req, res) => {
       let productsVisited = db.section.findAll({
           where : {
               id:1
           },
           include : [
            (association : "seccion_product")
           ]
       })
       res.render('home',{
           title: "Bici Bikes",
           productsVisited,
       })
    },
    carrito :(req, res) => {
        res.render('user/carritoCompras', {
            title: 'Carga de Producto'
        })
    },
    productosFull: (req,res)=>{
       db.Product.findAll()
       .then(producto =>{
           return res.render('products',{
               producto
           })
       })
       .catch(error => res.send(error))
    },
    search: (req, res) => { /*buscador siempre va por get */
        db.Product.findAll({ 
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
