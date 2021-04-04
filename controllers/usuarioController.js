const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {validationResult}= require('express-validator');

//const {getUsuario, setUsuario} = require(path.join('..','data','users'));

//const userJson = getUsuario(); /*user.json parseador  */
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
                
            })
        }else{
            
        const {name, lastName, password,password2, email,birthday ,avatar} = req.body;

         db.Users.create({
            name,
            lastName,       
            email,
            password : bcrypt.hashSync(password,10),
            password2 : bcrypt.hashSync(password2,10),   
            avatar : req.files[0].filename,
            birthday
            
        })
        .then(()=> res.redirect('/usuario/login'))
        .catch(error => console.log(error))
        }
        res.send(users)

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

            db.Users.getOne({
                where:{
                    email : email
                }
            })
            .then( user => {
                if(user){
                    if(bcrypt.compareSync(password.trim(), user.password)){
                        req.session.userPerfil = {
                            id: user.id,
                            avatar :user.avatar,
                            name : user.name,
                            lastName : user.lastName,
                            email : user.email,
                            birthday:user.birthday
                        }
                        if(recordar){
                            res.cookie('biciBikes', req.session.userPerfil,{
                                maxAge: 1000*60*60
                            });
                        }
                                           
                        return res.redirect('/usuario/miPerfil');
                    }else{
                        return res.render('user/login',{
                            title: "log in",
                            errores :{
                                invalid :{
                                    msg : "datos invalidos!"
                                }
                            }
                        })
                    }
                }}).catch(error => console.log(error))
            
            }},
            
    perfil : (req,res)=>{

        //let datoUser = db.Usuarios.find( perfil => perfil.id === req.params.id);

        res.render( 'user/perfil',{
            title: "Mi perfil",
          //  datoUser
        })
    },

        //edit perfil 


    cerrar : (req,res)=>{
        req.session.destroy();
        if(req.cookies.biciBikes){
            res.cookie('biciBikes','',{
                maxAge: -1
            })
        }
        res.redirect('/')
    },


}