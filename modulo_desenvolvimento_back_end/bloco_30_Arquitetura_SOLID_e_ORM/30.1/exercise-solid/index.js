const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`App listening on port ${PORT}`));
