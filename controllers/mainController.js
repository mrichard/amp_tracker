var path = require( 'path' );

module.exports = {
	handleIndex: function(req, res) {
		res.sendFile(  path.join( __dirname, '../public/html/index.html' ) );
	}
};
