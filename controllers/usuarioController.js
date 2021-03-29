const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check , validationResult, body}= require('express-validator');

const {getUsuario, setUsuario} = require(path.join('..','data','users'));

const userJson = getUsuario(); /*user.json parseador  */

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
                errores : errores.mapped()
            })
        }else{
            
        const {name, lastName, password,password2, email,date ,foto} = req.body;

        let lastID = 0;
        userJson.forEach(user => {
            if(user.id > lastID){
                lastID = user.id
            }
        });

        let passHash = bcrypt.hashSync(password.trim(),10);
        let passHash2 = bcrypt.hashSync(password2.trim(),10);

        const newUser = {
            id : Number(lastID +1),
            name,
            password: passHash,
            password2 : passHash2,
            lastName,
            email,
            foto : req.files[0].filename,
            date
            
        }
      
        userJson.push(newUser);

        setUsuario(userJson);
        res.redirect('/usuario/login')
        }

    },
    processLogin : (req ,res )=>{ 
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('user/login',{
                title:"Log in",   
                errores : errores.mapped()
               
            })
        }else{
            /*aqui pido los datos password y email para comprar con los ya registrados */
            const {password, email , recordar} = req.body;

            let result = userJson.find(user => user.email.toLowerCase() === email.toLowerCase().trim());

            /*y en caso de que los datos coincidan este re redirecciona en home ya teniendo acceso a todas las paginas*/
            if(result){

                if(bcrypt.compareSync(password.trim(), result.password)){
                   /*necesito de la vista y ruta perfil para que todo funcione 
                   se aclara que la compracion de datos funciona */ 
                                  
                   req.session.userPerfil = {
                       id: result.id,
                       foto :result.foto,
                       name : result.name,
                       lastName : result.lastName,
                       email : result.email,
                       date:result.date
                   }

                   if(recordar){
                       res.cookie('biciBikes', req.session.userPerfil,{
                           maxAge: 1000*60
                       })
                   }
                   
                   return res.redirect('/usuario/miPerfil')
                  
                }
                                
                }

                return res.render('user/login',{
                    title: "log in",
                    errores:[{
                        msg: "datos invalidos!"
                    }]
                    
                })
            }

    },
    perfil : (req,res)=>{

        let datoUser = userJson.find( perfil => perfil.id === req.params.id);

        res.render( 'user/perfil',{
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
        userJson.forEach(user =>{
            if(user.id === Number(req.params.id)){
                if(fs.existsSync(path.join('public','images','imgUser', user.foto))){
                    fs.unlinkSync(path.join('public','images','imgUser', user.foto))
                }
                var eliminar = userJson.indeOf(user);
                userJson.splice(eliminar,1)
            }
        });
        fs.writeFileSync('./data/users.json',JSON.stringify(userJson),'utf-8');
        res.redirect('/')
    }
}