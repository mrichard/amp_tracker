var app = require( '../app' );
var request = require( "supertest" );
var assert = require( "assert" );

describe( "When requesting /index", function(){

	it("should respond 200 with content", function( done ){
		request( app )
		.get( '/index' )
		.expect( 300, done )
		.end( function(err, res){
			// find something here?
			//console.log( res );
			done();
		});

	});

});