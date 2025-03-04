const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();

// Configurar la carpeta de vistas con ruta relativa
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', { title: 'Joyas Preciosas' }));
app.get('/inicio', (req, res) => res.render('index', { title: 'Joyas Preciosas' }));
app.get('/contact', (req, res) => res.render('index', { title: 'Contacto-Joyas Preciosas' }));

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
