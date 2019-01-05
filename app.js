'use strict'
var express = require('express'),
	routes = require('./routes/routes.js'),
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/view`,
	port = (process.env.PORT || 3000),
	app = express()

module.exports = app