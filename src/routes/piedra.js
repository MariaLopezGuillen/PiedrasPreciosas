const express = require('express');
const router = express.Router();
const gemasController = require('../controllers/gemasController');
const upload = require('../app').upload;

// Rutas
router.get('/', gemasController.listarGemas); // Listar gemas
router.post('/', upload.single('imagen'), gemasController.crearGema); // Crear gema
router.put('/:id', gemasController.editarGema); // Editar gema
router.delete('/:id', gemasController.eliminarGema); // Eliminar gema

module.exports = router;