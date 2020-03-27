const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('../database/connection.js');
const get = require('../database/Place.model.js').get;

const app = express();
const PORT = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);

  connectDb().then(() => console.log("MongoDB connected."))
});

app.get('/api/photos/:id', (req, res) => {
  get({ _id: req.params.id }, (err, success) => {
    (err) ? console.log('err: ', err) : res.send(success);
  });
});
