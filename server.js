console.log('##################### ON #####################'); 

const express = require('express');
const app = express();
port = 3001;

app.get('/', (req, res) => {res.send('Requisição GET')});

app.listen(port, () => {});