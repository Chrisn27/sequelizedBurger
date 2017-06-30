'use strict';

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var db = require("./models");
var app = express();


app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controller/burgers_controller.js');
app.use('/', routes);

const port = process.env.PORT || 3030;

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});