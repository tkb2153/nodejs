var fs = require('fs');
var path = require('path');

module.exports =  {
	file_path: '',

    	exist: function(file_path, callback) {
        	var data = null;
		this.file_path = file_path;
        	data = fs.existsSync(this.file_path);
		callback && callback( data.toString() );
    	},
    
	read: function(callback) { 
		var data = null;
 		data = fs.readFileSync( this.file_path );
		callback && callback( data.toString() );
	},
	
	print: function(data) {
		return data;
	},
	
	write: function(text) {
		if ( text === '' ) {
			text = 1;
		}
		
		fs.writeFile(this.file_path, text, function(err) {
			if ( err ) throw err;
		});
	}
};


