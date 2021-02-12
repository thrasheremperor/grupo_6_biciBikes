module.exports = {
    admin :(req, res) => {
        res.render('formCarga', {
            title: 'carga de producto'
        }) /*renderiso  la vista de admin.ejs */
    }
}