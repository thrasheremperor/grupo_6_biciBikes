module.exports = {
    index : (req, res) => {
        res.render('home', {
            title : "Bici Bikes",
            about : "Las mejores marcas al mejor precio, sin duda!"
        })
    },
    about : (req, res) => {
        res.render('about')
    }
}