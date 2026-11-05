const express = require("express");
const jwt = require("jsonwebtoken");
const UsuariosRotas = require("./UsuariosRotas");
const PostsRotas = require("./PostsRotas");

const RotasPrivadas = express.Router();

// Middleware
RotasPrivadas.use((request, response, next) => {
  if (request.headers.token) {
    const { token } = request.headers;

    try {
      jwt.verify(token, "ART23TFERSD@#");
      auth = true;
    } catch (e) {
      return response.status(403).send(e);
    }
  }

  if (auth === false) {
    return response.status(403).send("Não Autorizado");
  }

  next();
});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;
