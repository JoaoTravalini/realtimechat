const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200",  // Permite apenas o frontend rodando no localhost:4200
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('Novo cliente conectado!');
  socket.on('message', (msg) => {
    console.log('Mensagem recebida:', msg);
    io.emit('message', `${msg}`);
  });
});

server.listen(8080, () => {
  console.log('Servidor WebSocket rodando na porta 8080');
});
