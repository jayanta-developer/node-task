require('express-async-errors');
const bodyParser = require('body-parser');
const express = require('express');
//Routers
const product = require('./router/product');
//Error handel
const errorController = require('./controller/errorController');

const app = express();
app.use(bodyParser.json());

app.use('/product', product);
app.use(errorController);

module.exports = app;
