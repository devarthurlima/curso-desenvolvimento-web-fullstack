class Usuarios {
  static lista = [
    {
      id: 1,
      nome: "Max",
      login: "max",
      senha: "123",
    },
  ];

  static listar() {
    return Usuarios.lista;
  }

  static adicionar(id, nome, login, senha) {
    Usuarios.lista.push({
      id: id,
      nome: nome,
      login: login,
      senha: senha
    });
  }

  static editar(indice) {}

  static excluir(indice) {
    Usuarios.lista.splice(indice, 1);
  }
}

module.exports = Usuarios;
