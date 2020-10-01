require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to School Manager API V1.0')
});

app.get('*', (req, res) => {
  res.status(404).json('Path not found')
});

app.disable('x-powered-by')

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.info(`School Manager API starting...\nListening on port: ${port}`);
});

module.exports = app;