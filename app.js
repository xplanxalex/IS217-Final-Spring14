
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var calculator = require('./public/javascripts/calculator.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', { locals: { scripts: ['calculator.js'] } });

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/calc', routes.calc);


app.get('/add', routes.add);
app.post('/add', routes.add);
app.get('/subtract', routes.subtract);
app.post('/subtract', routes.subtract);
app.get('/multiply', routes.multiply);
app.post('/multiply', routes.multiply);
app.get('/divide', routes.divide);
app.post('/divide', routes.divide);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
