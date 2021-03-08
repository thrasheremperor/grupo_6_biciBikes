const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');
const bcrypt = require('bcrypt');
const {check , validationResult, body}= require('express-validator');

const {getUsuario, setUsuario} = require(path.join('..','data','users'));

const usuario = getUsuario(); /*user.json parseador  */

module.exports  =  {
    login : ( req ,  res )  =>{
        res.render( 'login', { 
            title:"Log in"
        });
    },
    registro : ( req ,  res )  =>{
            res.render( 'registro',{
                title:"¡registrate aqui!"
            })
         },
    processRegistro : (req , res, next) =>{
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('registro',{
                title : 'register',
                errores : errores.errors
            })
        }else{
            
        const {nombre, apellido, pass, email, foto} = req.body;

        let lastID = 1;
        users.forEach(user => {
            if(user.id > lastID){
                lastID = user.id
            }
        });

        let passHash = bcrypt.hashSync(pass,10);

        const newUser = {
            id : Number(lastID +1),
            nombre,
            pass : passHash,
            apellido,
            email,
            foto 
            
        }
      
        users.push(newUser);

        setUsuario(users);
        res.redirect('/usuario/login')
        }

    },
    processLogin : (req ,res )=>{ 
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('login',{
                title:"Log in",   
                errores : errores.errors,
               
            })
        }else{
            /*aqui pido los datos pass y email para comprar con los ya registrados */
            const {pass, email , recordar} = req.body;

            let result = usuario.find(user => user.email === email);

            /*y en caso de que los datos coincidan este re redirecciona en home ya teniendo acceso a todas las paginas*/
            if(result){

                if(bcrypt.compareSync(pass.trim(), result.pass)){
                   /*necesito de la vista y ruta perfil para que todo funcione 
                   se aclara que la compracion de datos funciona */ 
                                  
                   req.session.user = {
                       id: result.id,
                       foto :result.foto,
                       nombre : result.nombre,
                       apellido : result.apellido,
                       email : result.email
                   }

                   if(recordar){
                       res.cookie('biciBikes', req.session.user,{
                           maxAge: 1000*60
                       })
                   }
                   
                   //return res.redirect('/usuario/miPerfil')
                   return res.redirect('/')
                }
                                
                }

                return res.render('login',{
                    title: "log in",
                    errores:[{
                        msg: "datos invalidos!"
                    }]
                    
                })
            }

    },
    perfil : (req,res)=>{

        let datoUser = usuario.find( perfil => perfil.id === req.params.id);

        res.render( 'perfil',{
            title: "Mi perfil",
            datoUser
        })
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
        users.forEach(user =>{
            if(user.id === Number(req.params.id)){
                if(fs.existsSync(path.join('public','images','users', user.foto))){
                    fs.unlinkSync(path.join('public','images','users', user.foto))
                }
                eliminar = users.indeOf(user);
                usuario.splice(eliminar,1)
            }
        });
        fs.writeFileSync('../data/users.json', JSON.stringify(usuario,null,2));
        res.redirect('/')

    }
}
     