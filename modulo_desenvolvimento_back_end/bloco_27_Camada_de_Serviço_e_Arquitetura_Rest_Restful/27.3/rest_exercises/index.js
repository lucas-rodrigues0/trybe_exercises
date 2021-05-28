const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController')
const errorMiddleware = require('./middlewares/errors');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productController);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
