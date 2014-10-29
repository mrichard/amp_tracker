var ampDataStore = require( '../models/ampDataStore' );
var sio;

module.exports = {
	publish: function(event, data){
		// broadcast here
		sio.emit( event, data );
	},
	init: function( socketIO ){
		console.log( socketIO );
		sio = socketIO;

		sio.on( 'connection', function( socket ){
			socket.emit( 'bootstrap', ampDataStore.getAll() );
		});

		setInterval( function(){
			console.log( "emmitting heartbeat" );
			sio.emit( "heartbeat", "heartbeat" );
		}, 7000);
	}
};

