var ampDataStore = require( '../models/ampDataStore' );
var socketController = require( '../controllers/socketController');

module.exports = {
	handlePostData: function(req, res) {
		console.log( "TRACK EVENT: ID = " + req.body.id + ". " + req.body.value);

		var newDataObject = ampDataStore.store( req.body );

		// publishing an ID and counter
		socketController.publish( "onBuffer", newDataObject );

		// send response to AMP page
		res.status(200).json( newDataObject );
	}
};

