const express = require('express');
const bodyParser = require('body-parser');

const Ceps = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/errors');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(router);

router.get('/ping', Ceps.PingPong);

router.get('/cep/:cep', Ceps.getByNumber);

router.get('/cep', Ceps.getAll);

// app.post('/cep', (req, res) => {
//   const test = req.body;
//   console.log(test);
//   res.status(200).json(test);
// })

router.post('/cep', Ceps.createNew);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;;

app.listen(PORT, () => {
  console.log(`Listening in port: ${PORT}`);
});
