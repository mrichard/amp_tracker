var express = require( 'express' );
var http = require( 'http' );
var app = express();

// set port
app.set( 'port', 3000 );

// create heatbeat route
app.route( '/heartbeat' )
.get( function( req, res ){
	res.status( 200 ).json( 'OK' );
});

// create server
http.createServer( app ).listen( app.get('port') );

module.exports = app;