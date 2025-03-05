const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const piedraSchema = new Schema({
    nombre: String,
    descripcion: String,
    foto: Object
});

// Crear el modelo
const Piedra = mongoose.model('Piedra', piedraSchema);

module.exports = Piedra;