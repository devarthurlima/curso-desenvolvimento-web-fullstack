class Pessoa {
  nome = "";
  idade = "";
  cpf = "";

  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }

  correr() {
    console.log(`O ${this.nome} está correndo...`);
  }

  dormir() {
    console.log("Dormindo");
  }
}

const pessoaClasse1 = new Pessoa("José", "18", "12332145666");
const pessoaClasse2 = new Pessoa("Maria", "21", "12309876555");

pessoaClasse1.nome = "João";

const pessoaAux = pessoaClasse1;
pessoaAux.nome = "Alice";
