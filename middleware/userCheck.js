module.exports = (req,res,next)=>{ 
    if(req.session.userPerfil){
        next()
    }else{
        res.redirect('/usuario/login')
    }
}
