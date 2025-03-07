"use strict";


let express = require('express'),
    mongoose = require('mongoose'), 
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('dotenv').config();
let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// Middleware para analizar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./router/rutas'));
app.use('/piedras', require('./router/piedras'));

// Configuración de MongoDB
const USER = 'maria';
const PASSWORD = 'Piedras123';
const DBNAME = 'Piedra';

const uri = `mongodb+srv://maria:Piedras123@piedras.sei4o.mongodb.net/`;

mongoose.connect(uri)
  .then(() => console.log("✅ Base de datos conectada con MongoDB"))
  .catch(err => console.error("❌ Error al conectar con MongoDB:", err));

// Middleware para manejar error 404
app.use((req, res) => {
    res.status(404).render("404", { titulo: "Error 404", descripcion: "Page not found" });
}).listen(PORT);

// Iniciar servidor
console.log(`🚀 Servidor iniciado en el puerto ${PORT}`);

