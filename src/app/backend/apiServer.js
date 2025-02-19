const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
  console.log('Mensagem recebida:', req.body);
  res.status(200).send({ message: 'Mensagem salva com sucesso!' });
});

app.listen(8000, () => {
  console.log('API rodando na porta 8000');
});
