var sio;

module.exports = {
	publish: function(event, data){
		// broadcast here
		sio.emit( event, data );
	},
	init: function( socketIO ){
		console.log( socketIO );
		sio = socketIO;

		setInterval( function(){
			console.log( "emmitting heartbeat" );
			sio.emit( "heartbeat", "heartbeat" );
		}, 7000);
	}
};

