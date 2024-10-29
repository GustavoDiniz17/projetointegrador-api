const express = require('express');
const bodyParser = require('body-parser');
const projetoRoutes = require('./routes/projetoRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', projetoRoutes);

module.exports = app;