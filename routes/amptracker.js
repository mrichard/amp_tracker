var express = require( 'express' );
var router = express.Router();
var ampTrackerController = require( '../controllers/amptracker' );

router.post( '/', ampTrackerController.handlePostData );

module.exports = router;