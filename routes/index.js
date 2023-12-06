const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const adminRoutes = require('./admin.router');

const clientesRoutes = require('./clientes.router');

// Importa los controladores necesarios
const { getProductsGroupedByCategory } = require('../controllers/indexController');

// Ruta principal
router.get('/', getProductsGroupedByCategory);

// Rutas de administración
router.use('/admin', adminRoutes);

// Rutas de clientes
router.use('/clientes', clientesRoutes);

module.exports = router;