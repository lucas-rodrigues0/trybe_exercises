const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const middleware = require('./middlewares');

const PORT = 3000;

app.use(bodyParser.json());

app.put('/recipe/:id/ingredients', middleware.verifyId, middleware.insert, middleware.remove);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
