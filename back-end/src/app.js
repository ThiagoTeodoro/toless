//Importes
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

//Settings API
const app = express();

//Allow request from all origens
app.use(cors());

//Folder with the SPA page ReactJS seted by static folder of aplication... its a public folder...
app.use(express.static('./src/views'));

//Type of comunication API.
app.use(express.json());

//File with routes API.
app.use(routes);

//Active pretty message error validators
app.use(errors());


module.exports = app;
