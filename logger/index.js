var winston = require( 'winston' );
var config = require( '../config/config' );

console.log( "LOGGIN CONFIG ======================" );
console.log( config.get( 'logger:filename' ) );

function Logger() {
	return winston.add( winston.transports.File, {
		filename: config.get( 'logger:filename' ),
		maxsize: config.get( 'logger:maxsize' ), //1048576
		maxFiles: config.get( 'logger:maxfiles' ),
		level: config.get( 'logger.level' )
	});
};

module.exports = new Logger();