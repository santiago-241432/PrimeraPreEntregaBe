const Router = require('express');

const productsRouter = Router();

const ProductManager = require('../ProductManager');
const manager = new ProductManager();



productsRouter.get('/', async (req,res) =>{

    const products = await manager.getProduct();
    
    

    let title = req.query.title;
    if(!title ||(title!=="fideos"&&title!=="arroz")){
        res.status(200).send({status:"success", products})
    return   
    }
    
    let productosFiltrados = products.filter(product=>product.title===title)
    res.status(200).send({status:"success", productosFiltrados})
    

    
    

});

productsRouter.get('/:pid', async (req,res) =>{
    const products = await manager.getProduct();
    const productId = parseInt(req.params.pid);
    const producto = products.find(products => products.id === productId)
    if(!producto){
        res.status(400).send({status:"error", message:"PRODUCTO NO ENCONTRADO"});
        return
    };
    res.status(200).send({status:"success", producto});
});



productsRouter.post('/', async(req,res) => {

    const products = await manager.getProduct();


    const newProduct = { title, description, price, thumbnail, code, stock } = req.body;


    


    
    if(!title || !description || !code || !price || !stock){
        res.status(400).send({status:"error", message:"Incompletes values"});
        return
    };
    
    

    await manager.addProduct(newProduct);

    const productos = await manager.getProduct();

    res.status(200).send({status:"success", message:"Product create",productos });


    
})

productsRouter.put('/:pid', async (req,res) =>{
    const products = await manager.getProduct();
    const productId = parseInt(req.params.pid);
    const producto = products.find(products => products.id === productId)
    if(!producto){
        res.status(400).send({status:"error", message:"PRODUCTO NO ENCONTRADO"});
        return;
    }


    let{ title, description} = req.body;
    if(title) producto.title = title;
    if(description) producto.description = description;


    await manager.addProduct(producto)

    const nuevosProductos = await manager.getProduct();

    res.status(200).send({status:"success", message:"Product update", nuevosProductos});

});

productsRouter.delete('/:pid', async (req,res) =>{
    const productId = parseInt(req.params.pid);

    await manager.deleteProduct(productId);

    const nuevosProductos = await manager.getProduct();

    res.status(200).send({status:"success", message:"PRODUCTO ELIMINADO", nuevosProductos});
});









module.exports = productsRouter;