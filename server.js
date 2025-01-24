import http from "http";
import { url } from "inspector";

const PORT = 3000;

const rotas = {
    "/": "Curso de Express api",
    "/livros": "entrei na rota livros",
    "/autores": "entrei na rota autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor escutando!");
});