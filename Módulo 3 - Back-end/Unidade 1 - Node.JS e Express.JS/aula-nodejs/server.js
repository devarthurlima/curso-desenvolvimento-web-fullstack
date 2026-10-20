const { createServer } = require("node:http");
const listarProdutos = require("./routes/produtos");

const host = "localhost";
const port = 3000;

const produtos = [
  {
    id: 1,
    nome: "Mouse USB",
    valor: 15.99,
  },
  {
    id: 2,
    nome: "Teclado USB",
    valor: 29.99,
  },
];

const app = createServer((request, response) => {
  const { url } = request;

  if (url === "/") {
    response.writeHead(200, { "content-type": "text/plain" });
    return response.end("Olá NodeJS, Servidor OK.");
  }

  if (url === "/produtos") {
    const dados = listarProdutos();

    response.writeHead(200, { "Content-type": "application/json" });
    return response.end(JSON.stringify(dados));
  }

  if (url === "/produtos/adicionar") {
    produtos.push({
      id: 3,
      nome: "Monitor 34p",
      valor: 3330.0,
    });

    response.writeHead(200, { "Content-type": "text/plain" });
    return response.end("Produto Adicionado com Sucesso");
  }

  if (url === "/produtos/remover") {
    produtos.pop();

    response.writeHead(200, { "Content-type": "text/plain" });
    return response.end("Produto Removido com Sucesso");
  }

  response.writeHead(404, { "Content-type": "text/plain" });
  return response.end("Página não encontrada - Not found");
});

app.listen(port, host, () => {
  console.log(`Servidor NodeJS execuntando http://${host}:${port}`);
});
