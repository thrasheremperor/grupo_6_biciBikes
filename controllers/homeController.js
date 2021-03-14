const dataBicis = require('../data/bicis');
const fs = require('fs');

module.exports = {
    index : (req, res) => {
        let Visited = dataBicis.filter(producto =>{
            return producto.section == 'visited'
        })
        let now = dataBicis.filter(producto=>{
            return producto.section == 'Now'
        })
        let popular = dataBicis.filter(producto=>{
            return producto.section == 'popular'
        })
        res.render('home', {
            title : "Bici Bikes",
            productsVisited: Visited,
            productsNow: now,
            productsPopular: popular
        })
    },
    carrito :(req, res) => {
        res.render('carritoCompras', {
            title: 'Carga de Producto'
        })
    },
    productosFull: (req,res)=>{

        res.render('products',{
            title: 'Todos los Productos',
            dataBicis
        })
    },
    search: (req, res) => { /*buscador siempre va por get */
        const resultado = dataBicis.filter(producto => {
            return producto.name.includes(req.query.buscador) || producto.marca.includes(req.query.buscador) || producto.modelo.includes(req.query.buscador)
        })
        res.send(resultado)
        res.render('home',{
            title: 'Resultado de Busqueda',
            dataBicis: resultado   
        })
    }
}