const express = require("express");
const AuthController = require("../controllers/AuthController");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const RotasPublicas = express.Router();

RotasPublicas.post("/login", (request, response) => {
  const body = request.body;
  const auth = new AuthController();
  const dados = auth.login(body.login, body.senha);
  if (dados) {
    const token = jwt.sign(dados, process.env.APP_KEY_TOKEN);
    return response.json({
      token: token,
    });
  }

  return response.json({
    message: "Login ou Senha Incorretos",
  });
});

module.exports = RotasPublicas;
