//Importes
const express = require('express');

//Importes Controller
const ShortenController = require('./controllers/ShortenController');
const ForwardController = require('./controllers/ForwardController');
const IndexController = require('./controllers/IndexController');

//Validators
const ShortenControllerValidator = require('./validators/ShortenControllerValidator');
const ForwardControllerValidator = require('./validators/ForwardControllerValidator');

//Criando instancias de rotas
const routes = express.Router();

//Rota para a pagina SPA com o Front-End React, aqui deveria ter todas as rotas, apontado todas para index.html porém só temos uma lá React então é só uma.
routes.get('/', IndexController.deliverIndexPage);

//Rota para encurtar e redirecionar urls
routes.post('/shorten', ShortenControllerValidator.validateShortenPost(), ShortenController.shortenUrl);

//Rota para encaminhar uma url encurtada
routes.get('/:hash', ForwardControllerValidator.validateForwardGet(), ForwardController.forwardUrl);

module.exports = routes;