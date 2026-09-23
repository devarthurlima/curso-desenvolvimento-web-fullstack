// Função de Boas-Vindas
function boasVindas(nome) {
  document.write(`<h1>Bem-vindo(a), ${nome}!</h1>`);
}

boasVindas("Gleidson");
boasVindas("Sarah");

// Funções com Retorno (Somar)
function somar(n1, n2) {
  return n1 + n2;
}

let resultadoSoma = somar(10, 20);
document.write(`O resultado é: ${resultadoSoma}<br/>`);

// Função Estático
function dobro(n) {
  return n * 2;
}

let resultadoDobro = dobro(15);
document.write(`O dobro é: ${resultadoDobro}<br/>`);

// Função Mutável
let valorInicial = 15;

function dobrarValorExterno() {
  valorInicial = valorInicial * 2; // Modifica diretamente a variável de fora
  return valorInicial;
}

let resultadoMutavel = dobrarValorExterno();
document.write(`O resultado é: ${resultadoMutavel}<br/>`);
document.write(`O valorInicial agora vale: ${valorInicial}<br/>`);

// Funções Anônimas
let saudacao = function (nome) {
  return "Olá, " + nome;
};

console.log(saudacao("João"));

// Arrow Functions
const somarCurto = (a, b) => a + b;

console.log(somarCurto(5, 5));

// Objetos
let pessoa = {
  nome: "Gleyson",
  idade: 33,
  genero: "Masculino",
  ehfumante: false,
  habilidades: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  andar: () => {
    console.log("Andei");
  },
};

localStorage.setItem("nome", "Gleidson");
// setTimeout(() => {
//    alert("Olá Pessoal")
// }, 3000);

// setInterval(() => {
//      console.log("Oi");
// }, 1000)
