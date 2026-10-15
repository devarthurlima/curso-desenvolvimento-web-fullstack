const { createServer } = require("node:http");

const host = "127.0.8.1";
const port = 3000;

const server = createServer((request, response) => {
  console.log("Método/Verbos: " + request.method);
  console.log("URL: " + request.url);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello World.</h1> <br /> Aula de Backend");
});

server.listen(port, host, () => {
  console.log(`Servidor executando http://${host}:${port}`);
});
