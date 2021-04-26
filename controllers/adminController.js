const fs = require('fs');
const path = require('path');

const db = require('../database/models');


module.exports = {
    cargar :(req, res) => {
        
        let categorias = db.category.findAll()
        let colores = db.color.findAll()
        let marcas = db.make.findAll()
        let descuentos = db.discount.findAll()
        Promise.all([categorias,colores,marcas,descuentos])
        .then(([categorias,colores,marcas,descuentos]) => {
            res.render('admin/formCarga', { /*aqui se puede visualizar un formulario de carga de un nuevo producto */
                title: 'Cargar producto',
                categorias,
                marcas,
                colores,
                descuentos /*renderiso  la vista de formCarga.ejs */
            })
            }) 
        
    },
    cargado:(req,res,next)=>{ 
          
        const {name,description,make,color,discount,price,category} = req.body
          db.Product.create({
              name,
              price : parseFloat(price),
              description,
              makeId : +make,
              categoryId : +category,
              colorId : +color, //hacer select para category y color  y make
              discountId : +discount
          })
          .then( product => {
              db.image.create({
                  image : req.files[0] ? req.files[0].filename : null,
                  productId : product.id
              })
              .then(function(){
                return res.redirect('/admin/list')
              })             
          })
          .catch(error => res.send(error))
    },
    
    creado:(req,res) =>{
        db.Product.findAll({ 
            include : [
                {association : 'images'}
            ]
       })
        .then(productos =>{
            res.render('admin/productsList',{ /*aqui se puede visualizar los productos publicados con sus opciones */
                title:'Carga realizada',
                productos 
            
            })
        })
        .catch(error => {console.log(error)})
    },
    editar:(req,res)=>{  /*la opcion de edicion en producto se envuentra en la vista productEditado */
        let categorias = db.category.findAll()
        let colores = db.color.findAll()
        let marcas = db.make.findAll()
        let descuentos = db.discount.findAll()
        let producto = db.Product.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {association : 'images'}
            ]
        })
        Promise.all([categorias,colores,marcas,descuentos,producto])
        .then(([categorias,colores,marcas,descuentos,producto]) =>{
            res.render('admin/productsEditado',{
            title : 'Editar producto',
            producto,
            marcas,
            categorias,
            colores,
            descuentos,
            })        
        })
        
    },   
    editado:(req,res)=>{
        const {name,description,make,color,discount,price,category} = req.body
        db.Product.update({
              name,
              price : parseFloat(price),
              description,
              makeId : +make,
              categoryId : +category,/*aqui se puede visualizar los productos ya editados */
              colorId : +color, 
              discountId : +discount
        },
        {
            where : {
                   id : req.params.id
            }
        })

        .then(()=>{
            db.image.update({
                image : req.files[0] ? req.files[0].filename : undefined
            },
            {
                where : {
                    productId : req.params.id
                }
            })
            .then( () => {
                return res.redirect('/admin/list')

            })

        })
        .catch(error => res.send(error))
    },
    
    borrar: (req,res)=>{
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(()=>{
            return res.redirect('/admin/list')
        })
        .catch(error => {console.log(error)})
         /*la opcion de borara en producto se envuentra en la vista productList */
        
    }
}