
var express = require('express');
var router = require('./routes/index');
var http = require('http');
var app = express();
var path = require('path');
var server  = http.createServer(app);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/', router);										//Rutas web
app.use(express. static(__dirname + '/public' )); 			//Directorio publico
app.set('port', process.env.PORT || 5000);					//Set puerto


app. listen(app. get('port' ), function(){
	console. log( 'Simplify Service iniciado en: http://localhost:' + app. get('port' ) + ';  Ctrl-C para finalizar.' );
});

module.exports = app;