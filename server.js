'use strict';

const express = require('express');
const app = express();

app.use(express.static('./starter-code'));

app.get('/', (req, res) => {
  res.send('Some random thing');
});

app.listen(3000, () => console.log('App listening on port 3000!'));