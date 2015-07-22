var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(express. static(__dirname + '/public' ));       //Directorio publico
app.set('port', process.env.PORT || 5000);          //Set puerto


app. listen(app. get('port' ), function(){
  console. log( 'Flickr Service iniciado en: http://localhost:' + app. get('port' ) + ';  Ctrl-C para finalizar.' );
});

module.exports = app;
