const dataBicis = require('../data/bicis');
const fs = require('fs');
module.exports = {
    cargar :(req, res) => {
        res.render('formCarga', { /*aqui se puede visualizar un formulario de carga de un nuevo producto */
            title: 'Carga'
        }) /*renderiso  la vista de formCarga.ejs */
    },
    cargado:(req,res)=>{
        let lastID = 1;
        dataBicis.forEach(producto => {
            if (producto.id >lastID) {
                lastID = producto.id
                
            }
            
        });
        const {name,marca,precio,description,nuevo,usado,contacto,cobro,cobro1,cobro2,envio,envio1,img} = req.body;
        const producto = {
            id:lastID +1,
            name,
            marca,
            precio,
            description,
            nuevo,
            usado,
            contacto,
            cobro,
            cobro1,
            cobro2,
            envio,
            envio1,
            img
        }

        dataBicis.push(producto)

        fs.writeFileSync('./data/bicis.json',JSON.stringify(dataBicis),'utf-8');
        res.redirect('/admin/list');
    },
    
    creado:(req,res) =>{
         res.render('productsList',{ /*aqui se puede visualizar los productos publicados con sus opciones */
            title:'vista admin',
            dataBicis
        })
    },
    editar:(req,res)=>{  /*la opcion de edicion en producto se envuentra en la vista productList */
        res.render('productsList',{
            title: 'vista admin'
        })
        
    },
    borrar: (req,res)=>{ /*la opcion de borara en producto se envuentra en la vista productList */
        res.render('productslist', {
            title: 'vista admin'
        })
    },
    editado:(req,res)=>{ /*aqui se puede visualizar los productos ya editados */
        res.render('productsEditado',{
            title: 'producto editado'
        })
    }

}