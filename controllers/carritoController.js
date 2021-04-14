const db= require('../database/models')
const verificar=(carrito, id) =>{
    let pos= -1
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id ==id){
            pos=i
            break
        }
        
    }
    return pos
}
module.exports ={

 agregarItem: (req,res) => {
     let carrito= req.session.carrito;
     let id= req.params.id

     db.Product.findOne({
         where:{
             id
         },
         include:[
             {association: 'images'}
            ]  
        })
     .then(producto=>{
           if(producto){
              let pos = verificar(carrito, id)

                if(pos === -1){
                    let item = {
                      id: producto.id,
                      nombre: producto.nombre,
                      image: producto.images[0].link,
                      precio: poducto.precio,
                      cantidad: 1,
                      total: producto.precio


                    }
                    carrito.push(item)
                }else{
                    let item = carrito[pos]
                    item.cantidad = item.cantidad + 1
                    item.total= item.cantidad * item.precio
                    carrito[pos] = item
           
                }
                req.session.carrito= carrito

                return res.status(200).json(req.session.carrito)
            }
        })
    },

 
 quitarItem:(req,res) =>{

 },
 mostrarCarrito:(req,res) =>{

 },
 vaciarCarrito:(req,res) =>{

 },


}