const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3003;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(body.Parser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
