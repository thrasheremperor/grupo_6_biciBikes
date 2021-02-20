const fs = require('fs');
const path = require('path');
const bicis = require('../data/bicis.json');
const productosController = require('./productosController');

const {getBicis, setBicis} = require(path.join('..','data','bicis'));

const productos = getBicis();

module.exports = {
    admin :(req, res) => {
        res.render('formCarga', { /*aqui se puede visualizar un formulario de carga de un nuevo producto */
            title: 'Carga'
        }) /*renderiso  la vista de formCarga.ejs */
    },
    
    crear:(req,res) =>{
         res.render('productsList',{ /*aqui se puede visualizar los productos publicados con sus opciones */
            title:'vista admin'
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
    },
    processCarga : (req , res) =>{
        const {nombre, marca, modelo, color,img,precio, envio,description,contacto} = req.body;
        let lastID = 0;
        bicis.forEach(productos => {
            if(productos.id > lastID){
                lastID = productos.id
            }
        });
        const newProductos = {
            id : lastID +1,
            nombre,
            marca,
            modelo,
            color,
            img,
            precio,
            envio,
            description,
            contacto
        }
      
        bicis.push(newProductos);

        setProducto(bicis);

        res.redirect('/productos/list')
    },
}