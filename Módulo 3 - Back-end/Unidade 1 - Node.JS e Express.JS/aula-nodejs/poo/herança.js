class Pessoa {
  nome;
  cpf;
  data_nascimento;

  constructor(nome, cpf, data_nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
  }

  autenticacao() {
    console.log(`${this.nome} - Autenticando`);
  }
}

class Gerente extends Pessoa {
  constructor(nome, cpf, data_nascimento) {
    super(nome, cpf, data_nascimento);
  }
}

const pessoa = new Pessoa("João", "09876543211", "2000-01-12");
const gerente = new Gerente("José", "09889009888", "2000-01-10");

pessoa.autenticacao();
gerente.autenticacao();

class Carro {
  static acelerar() {
    console.log("Acelerando...");
  }

  static frear() {
    console.log("Frear...");
  }

  static ligarSeta(direcao) {
    console.log("Ligando seta para " + direcao);
  }
}

Carro.acelerar();
Carro.frear();
Carro.ligarSeta("direita");
Carro.ligarSeta("esquerda");
