class UsuarioModel {
  static lista = [
    {
      nome: "Admin",
      login: "admin",
    },
  ];

  static listar() {
    return UsuarioModel.lista;
  }
  static consultarPorId() {}
  static criar(data) {
    UsuarioModel.lista.push(data);
  }
  static atualizar() {}
  static deletar() {}
}

module.exports = UsuarioModel;
