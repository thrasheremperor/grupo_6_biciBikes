const dataBicis = require('../data/bicis');

module.exports = {
    index : (req, res) => {
        let Visited = dataBicis.filter(producto =>{
            return producto.category == 'visited'
        })
        let now = dataBicis.filter(producto=>{
            return producto.category == 'Now'
        })
        let popular = dataBicis.filter(producto=>{
            return producto.category == 'popular'
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
            title: 'carga de producto'
        })
    },
    productosFull: (req,res)=>{
        res.render('products',{
            title: 'todos los productos'
        })
    }
}