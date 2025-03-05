const Gema = require('../models/gemas');

module.exports = {
    // Listar gemas
    listarGemas: async (req, res) => {
        try {
            const gemas = await Gema.find(); // Obtener todas las gemas de la base de datos
            res.render('index', { title: 'Joyas Preciosas', gemas }); // Pasar las gemas a la vista
        } catch (error) {
            console.error("Error obteniendo las gemas:", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    // Crear una gema
    crearGema: async (req, res) => {
        const { nombre, descripcion, dureza, ubicacion } = req.body;
        const imagen = req.file ? `/img/uploads/${req.file.filename}` : '';

        try {
            const nuevaGema = new Gema({ nombre, descripcion, imagen, dureza, ubicacion });
            await nuevaGema.save();
            req.flash('success_msg', 'Gema creada con éxito');
        } catch (error) {
            req.flash('error_msg', 'Error al crear la gema');
        }
        res.redirect('/');
    },

    // Editar una gema
    editarGema: async (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, dureza, ubicacion } = req.body;

        try {
            await Gema.findByIdAndUpdate(id, { nombre, descripcion, dureza, ubicacion });
            req.flash('success_msg', 'Gema actualizada con éxito');
        } catch (error) {
            req.flash('error_msg', 'Error al actualizar la gema');
        }
        res.redirect('/');
    },

    // Eliminar una gema
    eliminarGema: async (req, res) => {
        const { id } = req.params;

        try {
            await Gema.findByIdAndDelete(id);
            req.flash('success_msg', 'Gema eliminada con éxito');
        } catch (error) {
            req.flash('error_msg', 'Error al eliminar la gema');
        }
        res.redirect('/');
    }
};