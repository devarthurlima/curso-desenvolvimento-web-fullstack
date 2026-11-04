const UsuarioModel = require("../models/UsuarioModel");

class AuthControler {
  login(login, senha) {
    const dados = UsuarioModel.authenticate(login, senha);
    return dados;
  }
}

module.exports = AuthControler;
