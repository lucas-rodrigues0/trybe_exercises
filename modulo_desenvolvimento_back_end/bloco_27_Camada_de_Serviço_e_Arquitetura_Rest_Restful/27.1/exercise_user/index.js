const express = require('express');
const bodyParser = require('body-parser');
const users = require('./models/users');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/user', async (_req, res) => {
  const usersData = await users.getUsers();

  res.status(200).json(usersData);

});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const userById = await users.getUserById(id);

  if (!userById) { res.status(404).json({ error: 'true', message: 'Usuário não encontrado' }) }

  res.status(200).json(userById);
})

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!users.isValidUser({ firstName, lastName, email, password })) {
      return res.status(400).json({ error: 'true', message: 'O campo \'password\' deve ter pelo menos 6 caracteres' });
  }

  const result = await users.createUser(firstName, lastName, email, password);

  res.status(201).json(result);
});


app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`);
});
