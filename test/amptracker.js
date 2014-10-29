var app = require( '../app' );
var request = require( "supertest" );
var assert = require( "assert" );

describe( "When requesting /track", function(){

	var postData = {
		id: "12345",
		value: "Playing has been triggered"
	};

	it("should respond with 200", function( done ){
		request( app )
		.post( '/track')
		.send( postData )
		.expect( 200 )
		.end( function(err, res){
			var returnData = JSON.parse( res.text );
			assert.equal( postData.id, returnData.id);
			assert.equal( postData.value, returnData.value );
			done();
		});
	});
});