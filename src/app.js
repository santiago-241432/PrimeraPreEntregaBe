
const express = require('express');
const http = require('http');
const { Server }= require('socket.io');

const router = require('./routes/carts.router');
const productsRouter = require ('./routes/products.router');


const app = express();

const server = http.createServer(app);


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const morgan = require('morgan');
app.use(morgan('dev'));

const {engine} = require ('express-handlebars');
app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


/*app.use('/api/products', productsRouter)*/
/*app.use('/api/carts', router)*/

app.listen(8080,()=>{console.log('Listening on 8080');
});

const io = new Server(server);

let productos = [
    {name:"zanahoria"},
    {name:"pera"},
    {name:"banana"},
    {name:"naranja"}
]

app.get('/',(req,res) =>{
    res.render('home',{productos});
})
const logs = [];

app.get('/realtimeproducts',(req,res) =>{
    res.render('realTimeProducts');
})

io.on('connection',socket =>{

    socket.on("message2", data =>{
        logs.push({message:data})
        io.emit('log',{logs});
    })
})