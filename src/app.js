const express = require('express');
const router = require('./routes/carts.router');
const productsRouter = require ('./routes/products.router');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use('/api/products', productsRouter)
app.use('/api/carts', router)

app.listen(8080,()=>{console.log('Listening on 8080');
});
