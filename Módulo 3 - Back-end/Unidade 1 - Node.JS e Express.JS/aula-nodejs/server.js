const { createServer } = require("node:http");
const rotas = require("./routes/router");

const host = "localhost";
const port = 3000;

const app = createServer((request, response) => {
  const { url, method } = request;

  if (url === "/") {
    response.writeHead(200, { "content-type": "text/plain" });
    return response.end("Olá NodeJS, Servidor OK.");
  }

  if (!rotas[url] || !rotas[url][method]) {
    response.writeHead(404, { "Content-type": "text/plain" });
    return response.end("Página não encontrada - Not found");
  }

  const dados = rotas[url][method]();
  response.writeHead(200, { "Content-type": "application/json" });
  return response.end(JSON.stringify(dados));
});

app.listen(port, host, () => {
  console.log(`Servidor NodeJS execuntando http://${host}:${port}`);
});
