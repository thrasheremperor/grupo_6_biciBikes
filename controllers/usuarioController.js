const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {validationResult}= require('express-validator');

const db = require('../database/models');

module.exports  =  {
    login : ( req ,  res )  =>{
        res.render( 'user/login', { 
            title:"Log in"
        });

    },
    registro : ( req ,  res )  =>{
            res.render( 'user/registro',{
                title:"¡registrate aqui!"
            })
         },
    processRegistro : (req , res, next) =>{
        
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('user/registro',{
                title : 'register',
                errores : errores.mapped(),
                old :req.body
                
            })
        }else{
            
        const {name, lastName, password, email} = req.body;
        db.address.create({
            street:null,
            number:null,
            city:null,
            state:null,
            zipCode: null
        })
        .then((address)=>{
            db.User.create({
                name,
                lastName,       
                email,
                password : bcrypt.hashSync(password,10),   
                avatar : (req.files[0]) ? req.files[0].filename : "defoult.png",
                rol:1,
                addressId : address.id
                
            })
         
            .then(user => {
                console.log(user)
                res.redirect('/usuario/login')
            }) 
        })
        .catch(error => console.log(error))
    }
},
    processLogin : (req ,res )=>{ 
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('user/login',{
                title:"Log in",   
                errores : errores.mapped(),
                             
            })
        }else{
            /*aqui pido los datos password y email para comprar con los ya registrados */
            const {password, email , recordar} = req.body;

            db.User.findOne({
                where:{
                    email : email.trim()
                }
            })
            .then( user => {
                    if(user && bcrypt.compareSync(password.trim(), user.password)){
                        req.session.userPerfil = {
                            id: user.id,
                            avatar :user.avatar,
                            name : user.name,
                            lastName : user.lastName,
                            email : user.email,
                            rol : user.rol
                        }
                        if(recordar){
                            res.cookie('biciBikes', req.session.userPerfil,{
                                maxAge: 1000*60*60
                            });
                        }
                                           
                        return res.redirect('/');
                    }else{
                        return res.render('user/login',{
                            title: "log in",
                            errores :{
                                invalid :{
                                    msg : "email o contraseña incorrecto"
                                }
                            }
                        })
                    
                }}).catch(error => console.log(error))
            
            }},
            
    perfil : (req,res)=>{

        db.User.findOne({
            where:{
                id: req.session.userPerfil.id
            }
        })
        .then((user)=>{
            res.render( 'user/perfil',{
                title: "Mi perfil",
                user
            })
        })
        
    },

    edit : (req,res)=>{
        db.User.findOne({
            where:{
                id: req.session.userPerfil.id
            },
            include : [{association : 'user_address'}]
        })
        .then(user=>{
            res.render('user/editPerfil',{
                title: 'Editar Perfil',
                user
            })
        })
    },

    editado : (req,res)=>{
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('user/editPerfil',{
                title:"Editar Perfil",   
                errores : errores.mapped(),
                             
            })
        }else{
            
        const {name, lastName} = req.body;

         db.User.update({
            name : name,
            lastName:lastName,         
            avatar : (req.files[0]) ? req.files[0].filename : req.session.userPerfil.avatar,
            
        },{
            where : {
                id : req.params.id
            }
        })
        .then(user => {
            console.log(user)
            res.redirect('/usuario/login')
        }) 
        .catch(error => console.log(error))
        }
},

    cerrar : (req,res)=>{
        req.session.destroy();
        if(req.cookies.biciBikes){
            res.cookie('biciBikes','',{
                maxAge: -1
            })
        }
        res.redirect('/')
    },
    eliminar  : (req,res)=>{
        db.User.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(()=>{
            req.session.destroy();
            if(req.cookies.biciBikes){
            res.cookie('biciBikes','',{
                maxAge: -1
            })
        }
            return res.redirect('/')
        })
        .catch(error => {console.log(error)})      
    }
}