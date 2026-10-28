const produtos = require("./produtos");
const usuarios = require("./usuarios");

const rotas = {
  "/produtos": {
    'GET': () => produtos.listar(),
    'POST': () => produtos.adicionar(),
    'PUT': () => produtos.editar(0),
    'DELETE': () => produtos.excluir(0),
  },

  "/usuarios": {
    'GET': () => usuarios.listar(),
    'POST': () => usuarios.adicionar(),
    'PUT': () => usuarios.editar(0),
    'DELETE': () => usuarios.excluir(0),
  },
};

module.exports = rotas;
