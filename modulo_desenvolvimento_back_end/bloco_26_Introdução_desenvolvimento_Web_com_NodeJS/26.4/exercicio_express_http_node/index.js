const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const simpsons = require('./fs-utils');

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  res.status(200).json({ message: `Hello, ${req.body.name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  res.status(200).json({ message: `Seu nome é ${req.body.name} e você tem ${req.body.age} anos de idade` });
});

app.get('/simpsons', rescue(async (_req, res) => {
  const simpson = await simpsons.readSimpsons();

  res.status(200).json(simpson);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpson = await simpsons.readSimpsons();
  const simpsonById = simpson.find(({ id }) => id === req.params.id);

  if (!simpsonById) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(simpsonById);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpson = await simpsons.readSimpsons();
  const verifyID = simpson.some((elem) => elem.id === id);

  if (verifyID) return res.status(409).json({ message: 'id already exists' });

  simpson.push({ id, name })
  await simpsons.writeSimpsons(simpson);

  res.status(204).end();
}));

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Erro! mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000'));
