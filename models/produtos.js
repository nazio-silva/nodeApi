const restful = require('node-restful');
const mongoose = restful.mongoose;

//Meu Schema 
const produtosSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: Number
});

//Retornando o model
module.exports = restful.model('Produtos', produtosSchema);

