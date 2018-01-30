const port = 3000;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Conexao com o Banco apiTeste
mongoose.connect('mongodb://localhost/apiTeste');

//Midlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Inicializando o servidor
app.listen(3000);

console.log(`Servidor Rodando na porta: ${port}.`); 

