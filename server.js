const http = require('http');
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>¡Hola Mundo desde Render!</h1><p>Práctica de Cloud Computing exitosa.</p>');
});

server.listen(port, () => {
  console.log(Servidor escuchando en el puerto ${port});
});
