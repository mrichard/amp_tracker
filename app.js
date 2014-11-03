var express = require('express');
var http = require('http');
var io = require('socket.io');
var logger = require('morgan');
var bodyParser = require('body-parser');

var config = require( './config/config');

// create app
var app = express();
var server = http.Server( app );
var socketIO = io( server );

// set up CORS
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
 });


// set up SocketIO controller
var socketController = require('./controllers/socketController').init( socketIO );


app.use( bodyParser() );
app.use(express.static(__dirname + '/public'));

// PORT
app.set( 'port', process.env.PORT || config.get( "express:port" ) );

// LOGGING
app.use( logger( config.get( "logger:level" ), { immediate: true }) );

// MOUNT ROUTES
require('./routes')(app);


// CREATE SERVER
server.listen( app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;