const express = require('express');
const router = express.Router();

//Model
const Produtos = require('../models/produtos');

//Minhas Rotas e metodos crud
Produtos.methods(['get', 'put', 'post', 'delete']);
Produtos.register(router, '/produtos');

//Retornando a Rota
module.exports = router;