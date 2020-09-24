const express = require('express');

const controllers = require ('./controllers/controllers.js');

const routes = express.Router();

routes.get('/', controllers.getImageByLink );

module.exports = routes;