var app = require( '../app' );
var request = require( "supertest" );
var assert = require( "assert" );

describe( "When requesting /track", function(){

	var postData = {
		id: "12345",
		value: "Playing has been triggered",
		isFirstHit: true
	};

	it("should respond with 200 and have the correct data", function( done ){
		request( app )
		.post( '/track')
		.send( postData )
		.expect( 200 )
		.end( function(err, res){
			var returnData = JSON.parse( res.text );
			assert.equal( postData.id, returnData.id);
			assert.equal( 0, returnData.total );
			assert.equal( "user0", returnData.userNumber);
			done();
		});
	});


	it("should respond with 200 and have total 1 when video pauses twice", function( done ){
		var theapp = request( app );
		theapp
		.post( '/track')
		.send( postData )
		.expect( 200 )
		.end( function(err, res){
			theapp
			.post('/track')
			.send( postData )
			.expect( 200 )
			.end( function(){
				var returnData = JSON.parse( res.text );
				assert.equal( 1, returnData.total );
				done();
			});
		});
	});
});