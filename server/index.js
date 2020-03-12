const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3003;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));

app.get('/photos', (req, res) => {
  db.get((err, result) => {
    (err) ? res.send(err) : res.send(result)
  });
});

app.param(['id'], (req, res, next, value) => {
  console.log('id GET received: ', value);
});
