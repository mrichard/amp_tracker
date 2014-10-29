var express = require( 'express' );
var router = express.Router();
var socketController = require( '../controllers/socketController');

router.post( '/', function(req, res) {
	console.log( "TRACK EVENT: ID = " + req.body.id + ". " + req.body.value);

	socketController.publish( "onBuffer", {
		id: req.body.id,
		value: req.body.value,
		isFirstHit: req.body.isFirstHit
	});

	// send response to AMP page
	res.status(200).json({
		id: req.body.id,
		value: req.body.value
	});
});

module.exports = router;