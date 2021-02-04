let bicis = require('../data/bicis');

module.exports = {
    index : (req, res) => {
        res.render('home', {
            title : "Bici Bikes",
            about : "Las mejores marcas al mejor precio, sin duda!"
        })
    },
    search: (req, res) => {
        let buscar = req.query.search;
        let bikes = [];
        seccion = bicis.filter(bici => {
            return bici.marca.toLowerCase().include(buscar)
        });
        bikes.push({
            cateoria: "Los resultados de su busqueda",
            bicis: seccion
        });
        res.render("Productos", {
            title: "Resultado de la búsqueda",
            bikes: bikes
        });
    }
}