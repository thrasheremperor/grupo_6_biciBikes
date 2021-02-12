module.exports = {
    index : (req, res) => {
        res.render('home', {
            title : "Bici Bikes",
            about : "Las mejores marcas al mejor precio, sin duda!"
        })
    },
    carrito :(req, res) => {
        res.render('carritoCompras', {
            title: 'carga de producto'
        }) /*renderiso  la vista de admin.ejs */
    },
    about : (req, res) => {
        res.render('about')
    }
}