const mongoose = require('mongoose');

const piedraSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    foto: {
        type: String, // Almacenará la URL o la ruta de la imagen
        required: false // Puede ser opcional, dependiendo de tu lógica
    }
});

const Piedra = mongoose.model('Piedra', piedraSchema);

module.exports = Piedra;