module.exports = {
    index : (req, res) => {
        res.render('Detalle', {
            title : "Bici Bikes",
            detalle : "Detalle de Producto Seleccionado"
        })
    },
    about : (req, res) => {
        res.render('detalle')
    }
}