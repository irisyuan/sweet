// barebones needed to serve up static .scss
var express = require('express');
var handlebars = require('express-handlebars').
	create( { defaultLayout: 'main'});
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars.engine');

// static assets
app.use(express.static('public'));

// move routes to controllers directory later
app.get('/', function(req, res) {
  res.render('index');
});

// set the server port
app.listen(3000, function() {
	console.log('I\'m listening on localhost://3000');
});