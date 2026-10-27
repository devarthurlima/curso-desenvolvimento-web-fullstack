const { createServer } = require("node:http");
const Produtos = require("./routes/produtos");

const host = "localhost";
const port = 3000;

const app = createServer((request, response) => {
  const { url } = request;

  if (url === "/") {
    response.writeHead(200, { "content-type": "text/plain" });
    return response.end("Olá NodeJS, Servidor OK.");
  }

  if (url === "/produtos") {
    const dados = Produtos.listar();

    response.writeHead(200, { "Content-type": "application/json" });
    return response.end(JSON.stringify(dados));
  }

  if (url === "/produtos/adicionar") {
    Produtos.adicionar(4, "Monitor", 5485.55);
    response.writeHead(200, { "Content-type": "text/plain" });
    return response.end("Produto Adicionado com Sucesso");
  }

  if (url === "/produtos/remover") {
    Produtos.excluir(1);
    response.writeHead(200, { "Content-type": "text/plain" });
    return response.end("Produto Removido com Sucesso");
  }

  response.writeHead(404, { "Content-type": "text/plain" });
  return response.end("Página não encontrada - Not found");
});

app.listen(port, host, () => {
  console.log(`Servidor NodeJS execuntando http://${host}:${port}`);
});
