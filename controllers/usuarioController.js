const fs = require('fs');
const path = require('path');
const users = require('../data/users');

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
    processRegistro : (req , res) =>{
        const {nombre, apellido, pass, email} = req.body;
        let lastID = 0;
        users.forEach(user => {
            if(user.id > lastID){
                lastID = user.id
            }
        });

        const newUser = {
            id : lastID +1,
            nombre,
            pass
        }

    },
    processLogin : (req ,res )=>{
        res.send(req.body)
    }
}
     