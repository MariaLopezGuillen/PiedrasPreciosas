const mongoose = require('mongoose');

const gemasSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    dureza: { type: Number, required: true },
    ubicacion: { type: String, required: true }
});

module.exports = mongoose.model('Gema', gemasSchema);