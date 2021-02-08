module.exports = {
    admin :(req, res) => {
        res.render('admin', {
            title: 'carga de producto'
        }) /*renderiso  la vista de admin.ejs */
    }
}