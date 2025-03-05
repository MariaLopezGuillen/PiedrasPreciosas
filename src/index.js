const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();


// Configurar la carpeta de vistas con ruta relativa
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('index', { title: 'Joyas Preciosas' }));
app.get('/inicio', (req, res) => res.render('index', { title: 'Joyas Preciosas' }));
app.get('/contacto', (req, res) => res.render('contact', { title: 'Contacto-Joyas Preciosas' }));
app.get('/populares', (req, res) => res.render('populares', { title: 'Populares-Joyas Preciosas' }));
// Manejo de errores 404
app.use((req, res) => {
    res.status(404).render('404', {
        titulo: "Error 404",
        descripcion: "Página no encontrada"
    });
});
app.use(express.static('public'))

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
