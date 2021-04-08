const fs = require('fs');
const path = require('path');
const db = require('../database/models');


module.exports = {
    cargar :(req, res) => {
        db.category.findAll()
        .then(categorias => {
            res.render('admin/formCarga', { /*aqui se puede visualizar un formulario de carga de un nuevo producto */
                title: 'Cargar producto',
                categorias /*renderiso  la vista de formCarga.ejs */
            }) 
        })
        
    },
    cargado:(req,res,next)=>{ 
          
        const {name,model,description,make,color,discount,price,category,Image} = req.body
          db.Product.create({
              name,
              price,
              description,
              make,
              model,
              category,
              Image,
              color,
              discount
          })
          .then( product => {
              db.Image.create({
                  Image : req.files[0].filename,
                  productId : product.id
              })
              return res.redirect('/admin/list')
          })
          .catch(error => res.send(error))
    },
    
    creado:(req,res) =>{
         res.render('admin/productsList',{ /*aqui se puede visualizar los productos publicados con sus opciones */
            title:'Carga realizada',
        
        })
    },
    editar:(req,res)=>{  /*la opcion de edicion en producto se envuentra en la vista productEditado */
        db.Product.findByPk(req.params.id)
        
    },   
    editado:(req,res)=>{ /*aqui se puede visualizar los productos ya editados */
    },
    borrar: (req,res)=>{ /*la opcion de borara en producto se envuentra en la vista productList */
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            return res.redirect('/admin/list')
        })
        .catch(error => res.send(error))
    }
}