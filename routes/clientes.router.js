const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const { gafasModel } = require('../models/gafas.model');

// Módulos internos
const { readFile, writeFile } = require('../src/files');
const FILE_NAME = './db/gafas.txt';

//WEB
// Listar Mascotas
router.get('/', async (req, res)=>{
    console.log(req.user)
    const {search} = req.query;
    //Consulta con Sequelize
    let gafas = await models.gafas.findAll();
    res.render('gafas/index', { gafas: gafas, search: search });
});

router.get('/shopping-cart', async (req, res) => {
    try {
      // Obtener el carrito de compras del usuario (puedes implementar tu lógica de sesión aquí)
      // Supongamos que tienes un array de IDs de productos en la sesión (req.session.cart)
      const productIds = req.session.cart || [];
  
      // Buscar los productos en el carrito
      const productosCarrito = await Product.findAll({
        where: { id: productIds },
      });
  
      // Calcular el total del carrito sumando los precios de los productos
      const totalCarrito = productosCarrito.reduce((total, producto) => total + producto.precio, 0);
  
      // Renderizar la vista del carrito de compras
      res.render('shopping-cart', {
        productosCarrito,
        totalCarrito,
      });
    } catch (error) {
      console.error('Error al obtener el carrito de compras:', error);
      res.status(500).send('Error interno del servidor');
    }
  });
  
  module.exports = router;