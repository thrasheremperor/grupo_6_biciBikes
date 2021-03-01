module.exports= (req,res,next) =>{
    if(req.session.user){
        res.locals.user = res.session.user
    }
    next()
}