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
app.get('/crear', (req, res) => res.render('crear', { title: 'Crear-Joyas Preciosas' }));

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).render('404', {
        titulo: "Error 404",
        descripcion: "Página no encontrada"
    });
});
app.use(express.static('public'))

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));

// Configuración de MongoDB

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://maria:Piedras123@piedras.sei4o.mongodb.net/?retryWrites=true&w=majority&appName=Piedras";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

