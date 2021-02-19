module.exports = {
    admin :(req, res) => {
        res.render('formCarga', {
            title: 'carga de producto'
        }) /*renderiso  la vista de admin.ejs */
    },
    crear:(req,res) =>{
        console.log(req.body)

        res.redirect('/productos/list')

        res.render('productsList',{
            title:'vista admin'
        })
    },
    editar:(req,res)=>{
        res.render('productsList',{
            title: 'vista admin'
        })
        
    },
    borrar: (req,res)=>{
        res.render('productslist', {
            title: 'vista admin'
        })
    }
}