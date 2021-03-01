const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const {getUsuario, setUsuario} = require(path.join('..','data','users'));

const usuario = getUsuario();



module . exports  =  {
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
        

        const {nombre, apellido, pass, email,perfil} = req.body;

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
            perfil : req.files[0].originalname,
            
        }
      
        users.push(newUser);

        setUsuario(users);
        res.redirect('/usuario/login')
    },
    processLogin : (req ,res )=>{ 
        let errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.render('login',{

            })
        }else{
            /*aqui pido los datos pass y email para comprar con los ya registrados */
            const {pass, email , recordar} = req.body;

            let result = usuario.find(user => user.email === email);

            /*y en caso de que los datos coincidan este re redirecciona en home ya teniendo acceso a todas las paginas*/
            if(result){

                if(bcrypt.compareSync(pass, result.pass)){
                   return res.redirect('/')
                }
                if(recordar){
                    res.cookie('biciBikes', res.session.user,{
                        maxAge: 1000*60
                    })
                }
                                
                }
             
                res.render('login',{
                    error: 'Datos invalidos'
                })
            }

    }
}
     