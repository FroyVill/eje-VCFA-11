const express = require("express");
const hbs = require('hbs');
const bodyParser =require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

//motor para generar las vistas
app.set('view engine', 'hbs');
// por ejemplo header, menú vertical, menú horizontal
hbs.registerPartials(__dirname + '/view/partials', () =>{})

app.use(express.static('public'));// Parte publica de la app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());//Manejar datos en formato {}


//procesas solicutudes de tipo GET y POST = chrome, Edge
// GET - dashboard y 404
//POST - login

//Ruta para el dashboard
app.post('/dashboard', (req,res)=>{
    res.render('dashboard')
});

app.get('/login',(req,res)=>{
    res.render('login')
});

app.get('*',(req,res)=>{
    res.render('404',{
        nombre:"Jose Luis",
        edad:"27"
    })
});

app.listen(port,()=>{
    console.log('Servidor en express corriendo en el puerto: ', port);
})