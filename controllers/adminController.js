const dataBicis = require('../data/bicis');
const fs = require('fs');
const { patch } = require('../routes/adminRouter');

module.exports = {
    cargar :(req, res) => {
        res.render('formCarga', { /*aqui se puede visualizar un formulario de carga de un nuevo producto */
            title: 'Cargar producto'
        }) /*renderiso  la vista de formCarga.ejs */
    },
    cargado:(req,res,next)=>{    /*guadado de datos traidos del formulario de carga de producto */
        
        let lastID = 1;
        dataBicis.forEach(producto => {
            if (producto.id >lastID) { /*indica el valor del proximo id */
                lastID = producto.id
                
            }
            
        });
        const {name,marca,precio,description,envio,envio1,img} = req.body; 
        const producto = {
            id:lastID +1,
            name,
            marca,
            precio,
            description,
            envio,
            envio1,
            img : req.files[0].filename
        }

        dataBicis.push(producto) /*envio los datos guardados a el archivo json */

        fs.writeFileSync('./data/bicis.json',JSON.stringify(dataBicis),'utf-8');
        res.redirect('/admin/list'); /*cuando todo enviar vamos a esta direccion donde pondemos visualizar lo subido */
    },
    
    creado:(req,res) =>{
         res.render('productsList',{ /*aqui se puede visualizar los productos publicados con sus opciones */
            title:'Carga realizada',
            dataBicis
        })
    },
    editar:(req,res)=>{  /*la opcion de edicion en producto se envuentra en la vista productEditado */
        const producto = dataBicis.find(producto => producto.id === +req.params.id)
        res.render('productsEditado',{
            title: 'Editar producto',
            producto
        })
    },   
    editado:(req,res)=>{ /*aqui se puede visualizar los productos ya editados */
        const {name,marca,precio,description,envio,envio1,img} = req.body;
        dataBicis.forEach(producto =>{
            if(producto.id === +req.params.id){
                producto.id = Number(req.params.id);
                producto.name = name;
                producto.marca = marca;
                producto.precio = precio;
                producto.description = description;
                producto.envio = envio;
                producto.envio1 = envio1;
                producto.img = img;
                
            }
        });
        fs.writeFileSync('./data/bicis.json', JSON.stringify(dataBicis),'utf-8');
        res.redirect('/admin/list')
    },
    borrar: (req,res)=>{ /*la opcion de borara en producto se envuentra en la vista productList */
        dataBicis.forEach(producto =>{
            if(producto.id === Number(req.params.id)){ /*  si el producto seleccionado esta*/
               
                if(fs.existsSync(patch.join('public', 'images',producto.img))){
                    fs.unlinkSync(path.join('public','images',producto.img))
                }
               
                let borrar = dataBicis.indexOf(producto); /*este lo cuarga en nuestra variable */
                dataBicis.splice(borrar,1) /*para luego borrar el elemento seleccionado */
            }
        });
        fs.writeFileSync('./data/bicis.json', JSON.stringify(dataBicis),'utf-8');
        res.redirect('/admin/list') /*recarga los datos con los elementos actualizados */
    }
}