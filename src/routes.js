const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Rotas GET
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

// Rotas POST
routes.post('/products', ProductController.store);

//Rotas de PUT
routes.put('/products/:id', ProductController.update);

// Rotas de Delete
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;