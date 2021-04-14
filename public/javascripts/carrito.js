let spanCantidad = document.querySelector('span.badge');
let changuito = document.querySelector('#lista-carrito tbody');
let spanTotal = document.getElementById('total');
let cartHead = document.getElementById('cart-head');
let cartFooter = document.getElementById('cart-footer');
let cartEmpty = document.getElementById('cart-empty');
let btnCartEmpty = document.getElementById('btn-delete-cart');
let btnNextBuy = document.getElementById('btn-next-buy');

const urlBase= 'http://localhost:5000/';

const agregarItem = async(e,id)=>{
    e.preventDefault()

 try{
   let response= await fetch(urlBase + 'compras/agregar/' + id);
   let result= await response.json()
   console.log(result)
 } catch(error){
    console.log(error)
 }



}

const cargarTabla