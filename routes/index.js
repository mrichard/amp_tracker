module.exports = function(app){
	app.get( '/', function( req, res ){
		res.status( 200 ).json('hello world');

	});
	app.use( '/heartbeat', require( './heartbeat' ) );
	app.use( '/track', require( './amptracker') );
	app.use( '/index', require( './main' ) );
	app.use( require( './notFound' ).index );
};

