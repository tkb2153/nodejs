var fs = require('fs');
var path = require('path');

module.exports =  {
    exist: function(filepath, callback) {
        var data = null;
        data = fs.existsSync(filepath);
		callback && callback( data.toString() );
    },
    
	read: function(filepath, callback) { 
		var data = null;
 		data = fs.readFileSync( filepath );
		callback && callback( data.toString() );
	},
	
	print: function(data) {
		return data;
	},
	
	write: function(filepath, text) {
		if ( text === '' ) {
			text = 1;
		}
		
		fs.writeFile(filepath, text, function(err) {
			if ( err ) throw err;
		});
	}
};


