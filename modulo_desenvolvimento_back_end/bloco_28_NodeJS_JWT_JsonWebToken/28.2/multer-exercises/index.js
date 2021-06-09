require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { resolve } = require('path');
const fs = require('fs');

const uploadFolder = './uploads';

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(resolve(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  let alreadyExists = false;
  fs.readdirSync(uploadFolder).forEach((fileName) => {
    if (fileName.split('-')[1].includes(file.originalname)) {
      alreadyExists = true;
    }
  });

  const fileType = file.mimetype;
  if (fileType !== 'image/png') {
    req.fileValidationError = 'Extension must be `png`';
    return cb(null, false, req.fileValidationError);
  }

  if (alreadyExists) {
    req.fileValidationError = 'File already exists';
    return cb(null, false, req.fileValidationError);
  }

  return cb(null, true);
};

const upload = multer({ storage, fileFilter });

app.post('/upload', upload.single('file'), controllers.upload);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
