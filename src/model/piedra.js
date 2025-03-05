'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const piedraSchema = new Schema({
    id: {
        type: { Number, required: true },
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        imagen: { type: String, required: false }
    }

});
//Creacion del modelo
const piedras = mongoose.model('piedras', piedraSchema, "Piedras");
module.exports = piedras;