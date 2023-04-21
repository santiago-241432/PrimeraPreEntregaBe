const fs = require('fs');

class ProductManager{
    async addProduct(producto){
        const contenido = await fs.promises.readFile ('../productos.json', 'utf-8');

        const productos = JSON.parse(contenido);

        productos.push(producto);

        await fs.promises.writeFile('../productos.json', JSON.stringify(productos));
    }

    async getProduct(){
        const contenido = await fs.promises.readFile('../productos.json', 'utf-8');

        const productos = JSON.parse(contenido);

        return productos;
    }


    async getProductById(productId){

        const contenido = await fs.promises.readFile('../productos.json', 'utf-8');

        const productos = JSON.parse(contenido);

        const product = productos.find(e => e.id === productId);

        if(!product) {
            console.error("Not Found");
            
        }
        if(product) {
            console.log(product);
        }
        
    }

    

    

    async deleteProduct(productId){
        const contenido = await fs.promises.readFile('../productos.json', 'utf-8');

        const productos = JSON.parse(contenido);

        const product = productos.find(e => e.id === productId);

        if(!product) {
            res.status(400).send({status:"error", message:"PRODUCTO NO ENCONTRADO"});
            
        }
        if(product) {

            const prod = productos.filter(function(i){return i !== product})

            await fs.promises.writeFile('../productos.json', JSON.stringify(prod));
        }

    }
    
}
module.exports = ProductManager;

