const express = require("express");
const UsuariosRotas = require("./UsuariosRotas");
const PostsRotas = require("./PostsRotas");

const RotasPrivadas = express.Router();

// Middleware
RotasPrivadas.use((request, response, next) => {
  console.log(request.headers.token);
  if (request.headers.token !== "a1a2a3-a1a2a3") {
    return response.status(403).send("Não Autorizado");
  }

  next();
});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;
