const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// Conectar a MongoDB
const dbURI =
  "mongodb+srv://mariialg21:DBEosfN2oljsJ8TG@piedras.9kx1p.mongodb.net/piedras?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error de conexión a MongoDB:", err));

// Configurar la carpeta de vistas y el motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Definir el esquema de las gemas
const gemaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
});

// Crear el modelo
const Gema = mongoose.model("Gema", gemaSchema);

// Ruta principal donde se pasa la variable "gemas" a la vista
app.get("/", async (req, res) => {
  try {
    const gemas = await Gema.find(); // Obtener todas las gemas de la base de datos
    res.render("index", { title: "Joyas Preciosas", gemas }); // Pasar "gemas" a la vista
  } catch (err) {
    console.log("Error al obtener las gemas:", err);
    res.status(500).send("Error al cargar las gemas");
  }
});

// Otras rutas
app.get("/inicio", (req, res) =>
  res.render("index", { title: "Joyas Preciosas", gemas: [] })
);
app.get("/contacto", (req, res) =>
  res.render("contact", { title: "Contacto-Joyas Preciosas" })
);

// Ruta para la vista de gemas populares
app.get("/populares", async (req, res) => {
  try {
    const gemas = await Gema.find(); // Obtener todas las gemas
    res.render("populares", { title: "Populares-Joyas Preciosas", gemas }); // Pasar "gemas" a la vista
  } catch (err) {
    console.log("Error al obtener las gemas:", err);
    res.status(500).send("Error interno del servidor");
  }
});

// Manejo de errores 404
app.use((req, res) => {
  res
    .status(404)
    .render("404", {
      titulo: "Error 404",
      descripcion: "Página no encontrada",
    });
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
