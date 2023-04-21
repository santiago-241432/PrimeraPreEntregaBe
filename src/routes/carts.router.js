const { Router } = require('express');
const router = Router();

const CartManager = require('../CartManager');
const manager = new CartManager();


let cartId = 2;



router.post('/', async(req, res) => {

    const carts = await manager.getCart();
    
    cartId++;
  
    
    const newCart = {
      id: cartId,
      productos: []
    };
    
    await manager.addCart(newCart);

    const carritos = await manager.getCart();

    res.status(200).send({status:"success", carritos});

    
  });
  

  

router.get('/:cid', async (req,res) =>{
  
    const carts = await manager.getCart();
    const cartId = parseInt(req.params.cid);
    const carrito = carts.find(carts => carts.id === cartId)
    if(!carrito){
        res.status(400).send({status:"error", message:"CARRITO NO ENCONTRADO"});
        return
    };
     res.status(200).send({status:"success", carrito});
    
  });

  module.exports = router;