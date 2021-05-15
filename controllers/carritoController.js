const db = require('../database/models')

const verificar = (carrito,id)=> {
    let pos = -1
    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id == id){
            pos = i
            break
        }
    }
    return pos
}

module.exports = {
    agregarItem : (req,res)=>{
      let carrito = req.session.carrito;
      let id = req.params.id
     
        db.Product.findOne({
            where : {
                id
            },
            include : [
                {association : "images"}
            ]
        })
        .then(producto =>{
            if(producto){
                let pos = verificar(carrito,id)

                if(pos === -1){
                    let item = {
                        id : producto.id,
                        nombre : producto.name,
                        image : producto.images[0].link,
                        price : producto.price,
                        cantidad : 1,
                        total : producto.price 
                    }
                    carrito.push(item)
                }else{
                    let item = carrito[pos]
                    item.cantidad = item.cantidad + 1
                    item.total = item.cantidad * item.price
                    carrito[pos] = item
                }
                req.session.carrito = carrito

                return res.status(200).json(req.session.carrito)
            }
        })
    },
    quitarItem : (req,res) => {
       let carrito = req.session.carrito
       let id = req.params.id
       let pos = verificar(carrito,id)

       let item = carrito[pos]

       if(item.cantidad > 1){
           item.cantidad = item.cantidad -1;
           item.price = item.cantidad * item.price;
           carrito[pos] = item;
          req.session.carrito = carrito;
          return res.status(200).json(req.session.carrito) 
       }else{
           carrito.splice(item,1)
           req.session.carrito = carrito;
           return res.status(200).json(req.session.carrito) 
       }
    },
    mostrarCarrito : (req,res)=>{
        return res.status(200).json(req.session.carrito)
    },
    vaciarCarrito : (req,res) =>{
        req.session.carrito = []
        return res.status(200).json(req.session.carrito)
    }
}