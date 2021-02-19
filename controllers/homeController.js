const dataBicis = require('../data/bicis');

module.exports = {
    index : (req, res) => {
        let visited = dataBicis.filter(producto =>{
            return producto.categoty == 'visited'
        })
        let now = dataBicis.filter(producto=>{
            return producto.category == 'Now'
        })
        let popular = dataBicis.filter(producto=>{
            return producto.category == 'popular'
        })
        res.render('home', {
            title : "Bici Bikes",
            about : "Las mejores marcas al mejor precio, sin duda!",
            productosVisited : visited,
            productosNow: now,
            productosPopular: popular
        })
    },
    carrito :(req, res) => {
        res.render('carritoCompras', {
            title: 'carga de producto'
        })
    },
    about : (req, res) => {
        res.render('about')
    }
}