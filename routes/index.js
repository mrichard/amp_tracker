module.exports = function(app){
	app.use( '/heartbeat', require( './heartbeat' ) );
	app.use( '/track', require( './amptracker') );
	app.use( '/index', require( './main' ) );
	app.use( require( './notFound' ).index );
};

