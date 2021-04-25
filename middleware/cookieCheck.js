module.exports = (req,res,next)=>{
    if(req.cookies.biciBikes){
        req.session.userPerfil = req.cookies.biciBikes
    }
    next()
} 