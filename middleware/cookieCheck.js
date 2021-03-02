module.exports = (req,res,next)=>{
    if(req.cookies.biciBikes){
        res.session.user = req.cookies.biciBikes
    }
    next()
}