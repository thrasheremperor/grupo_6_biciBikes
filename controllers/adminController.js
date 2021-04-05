const dataBicis = require('../data/bicis');
const fs = require('fs');
const path = require('path');
const db = require('../database/models/product');


module.exports = {
    cargar :(req, res) => {
        res.render('admin/formCarga', { /*aqui se puede visualizar un formulario de carga de un nuevo producto */
            title: 'Cargar producto'
        }) /*renderiso  la vista de formCarga.ejs */
    },
    cargado:(req,res,next)=>{    
        const {name,modelId,description,makeId,colorId,discountId} = req.body
          db.Products.create({
              name,
              price,
              description,
              makeId,
              modelId,
              categoryId,
              imageId,
              sectionId,
              colorId,
              discountId
          })
          .then(()=>{
              return res.redirect('/admin/list')
          })
          .catch(error => res.send(error))
    },
    
    creado:(req,res) =>{
         res.render('admin/productsList',{ /*aqui se puede visualizar los productos publicados con sus opciones */
            title:'Carga realizada',
            dataBicis
        })
    },
    editar:(req,res)=>{  /*la opcion de edicion en producto se envuentra en la vista productEditado */
        const producto = dataBicis.find(producto => producto.id === +req.params.id)
        res.render('admin/productsEditado',{
            title: 'Editar producto',
            producto,
        })
        
    },   
    editado:(req,res)=>{ /*aqui se puede visualizar los productos ya editados */
        let id = req.params.id
        const {name,make,price,description,img} = req.body;
        dataBicis.forEach(producto =>{
            if(producto.id === +req.params.id){
                producto.id = Number(req.params.id);
                producto.name = name;
                producto.make = make;
                producto.price = price;
                producto.description = description; 
                producto.img = (req.files[0])?req.files[0].filename : producto.img                            
            }
        });
        fs.writeFileSync('./data/bicis.json', JSON.stringify(dataBicis),'utf-8');
        res.redirect('/admin/list')
    },
    borrar: (req,res)=>{ /*la opcion de borara en producto se envuentra en la vista productList */
        dataBicis.forEach(producto =>{
            if(producto.id === Number(req.params.id)){ /*  si el producto seleccionado esta*/
               
                if(fs.existsSync(path.join('public', 'images','imgProduct',producto.img))){
                    fs.unlinkSync(path.join('public','images','imgProduct',producto.img))
                }
               
                let borrar = dataBicis.indexOf(producto); /*este lo cuarga en nuestra variable */
                dataBicis.splice(borrar,1) /*para luego borrar el elemento seleccionado */
            }
        });
        fs.writeFileSync('./data/bicis.json',JSON.stringify(dataBicis,null,2),'utf-8');
        res.redirect('/admin/list') /*recarga los datos con los elementos actualizados */
    }
}