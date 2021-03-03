module.exports = (req,res,next)=>{
    if(req.cookies.biciBikes){
        req.session.user = req.cookies.biciBikes
    }
    next()
}