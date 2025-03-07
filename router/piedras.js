const express = require('express');
const router = express.Router();
const Piedra = require('../models/piedras'); // Asegúrate de que el modelo Piedra esté bien definido

// Ruta para mostrar las piedras
router.get('/piedras', async (req, res) => {
  try {
    // Obtener todas las piedras desde la base de datos
    const arraypiedras = await Piedra.find();  // Aquí suponemos que 'Piedra' es el modelo de tu base de datos
    res.render('piedras', { arraypiedras });  // Pasamos 'arraypiedras' a la vista
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las piedras');
  }
});

module.exports = router;
