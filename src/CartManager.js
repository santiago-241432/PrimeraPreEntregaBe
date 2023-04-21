const fs = require('fs');

class CartManager{
    async addCart(carrito){
        const contenido = await fs.promises.readFile ('../carrito.json', 'utf-8');

        const carritos = JSON.parse(contenido);

        carritos.push(carrito);

        await fs.promises.writeFile('../carrito.json', JSON.stringify(carritos));
    }

    async getCart(){
        const contenido = await fs.promises.readFile('../carrito.json', 'utf-8');

        const carritos = JSON.parse(contenido);

        return carritos;
    }


    async getCartById(cartId){

        const contenido = await fs.promises.readFile('../carrito.json', 'utf-8');

        const carritos = JSON.parse(contenido);

        const cart = carritos.find(e => e.id === cartId);

        if(!cart) {
            console.error("Not Found");
            
        }
        if(cart) {
            console.log(cart);
        }
        
    }

    

    

    async deleteCart(cartId){
        const contenido = await fs.promises.readFile('../carrito.json', 'utf-8');

        const carritos = JSON.parse(contenido);

        const cart = carritos.find(e => e.id === cartId);

        if(!cart) {
            console.error("Not Found");
            
        }
        if(cart) {

            const car = carritos.filter(function(i){return i !== product})

            console.log(car);

            await fs.promises.writeFile('../carrito.json', JSON.stringify(car));
        }

    }
    
}
module.exports = CartManager;
