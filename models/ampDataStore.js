var _ = require( 'underscore' );

var userNumber = 0;
var storage = {};

module.exports = {
	store: function( data ) {
		var id = data.id;

		// if the item is already in storage, then just add 1
		if( storage[id] ) {
			storage[id].total++;
		}
		// else create a new entry in the storage
		else {
			userNumber = userNumber + 1;

			storage.id = {
				id: data.id,
				total: 0,
				userNumber: "user" + userNumber
			}
		}

		return storage[id];
	},

	getAll: function(){
		return storage;
	}
};

