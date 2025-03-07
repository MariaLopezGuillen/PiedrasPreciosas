"use strict";

const express = require('express');
const router = express.Router();
const upload = require('../config/multer'); // Importa la configuración de multer


router.get('/', (req, res) => {
    res.render('index', { titulo: "mi titulo dinamico" });
});
router.get('/crear', (req, res) => {
    res.render('crear', { titulo: "mi titulo dinamico" });
});
router.get('/piedras', async (req, res) => {
    try {
        const arraypiedras = await Piedra.find(); // Obtén todas las piedras desde la base de datos
        res.render('piedras', {
            titulo: "Piedras Preciosas",
            arraypiedras // Pasa arraypiedras a la vista
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener las piedras");
    }
});
router.get('/detalle/:id', async (req, res) => {
    try {
        const pokemon = await obtenerPiedraPorId(req.params.id); // Asegúrate de tener esta función definida
        res.render('detalle', {
            titulo: "Detalles del Pokémon",
            pokemon,
            error: false,
            mensaje: ""
        });
    } catch (err) {
        res.render('detalle', {
            titulo: "Error",
            error: true,
            mensaje: "No se pudo obtener la información del Pokémon"
        });
    }
});

router.get('/contacto', (req, res) => {
    res.render('contacto', { tituloContacto: "Estamos en conctacto de manera dinámica" });
});

module.exports = router;