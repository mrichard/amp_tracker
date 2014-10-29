var express = require( 'express' );
var http = require('http');
var io = require( 'socket.io');

var logger = require('morgan');

var bodyParser = require( 'body-parser' );
//var cors = require( 'cors' );

var app = express();
var server = http.Server( app );
var socketIO = io( server );

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });



var config = require( './config/config');
var heartbeat = require( './routes/heartbeat' );
var notFound = require( './routes/notFound' );
var ampTracker = require( './routes/amptracker');
var main = require( './routes/main' );

var socketController = require('./controllers/socketController').init( socketIO );


app.use( bodyParser() );

app.use(express.static(__dirname + '/public'));

// set port
app.set( 'port', config.get( "express:port" ) );

// logging
app.use( logger( config.get( "logger:level" ), { immediate: true }) );

// mount routes
app.use( '/heartbeat', heartbeat );
app.use( '/track', ampTracker );
app.use( '/index', main );
app.use( notFound.index );

// create server
server.listen( app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;