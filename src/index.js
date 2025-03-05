const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const multer = require('multer');
const app = express();

// Configuración de MongoDB
const uri = "mongodb+srv://maria:Piedras123@piedras.sei4o.mongodb.net/?retryWrites=true&w=majority&appName=Piedras";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexión a MongoDB exitosa");
}).catch(err => {
    console.error("Error conectando a MongoDB:", err);
});

// Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Configurar la carpeta de vistas y archivos estáticos
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => res.render('index', { title: 'Joyas Preciosas' }));
app.get('/inicio', (req, res) => res.render('index', { title: 'Joyas Preciosas' }));
app.get('/contacto', (req, res) => res.render('contact', { title: 'Contacto-Joyas Preciosas' }));
app.get('/crear', (req, res) => res.render('crear', { title: 'Crear-Joyas Preciosas' }));

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).render('404', {
        titulo: "Error 404",
        descripcion: "Página no encontrada"
    });
});

// Iniciar servidor
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));