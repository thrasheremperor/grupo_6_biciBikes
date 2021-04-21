module.exports= (req,res,next) =>{
    if(req.session.userPerfil){
        res.locals.userPerfil = req.session.userPerfil
    }
    next()
}