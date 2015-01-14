var net = require('net');
var child_process = require('child_process');
var path = require('path');

var files = require('./files');
var file_path = path.join(__dirname, 'file.txt');

files.exist(file_path, function(data) {
    if ( data ) {
        files.read(file_path, function(data) { 
        	data = files.print(data);
        	console.log('print ==> ' + data);
        	
        	data_txt = parseInt(data) + 1;
        	console.log('parseInt ==> ' + data_txt);
        	
        	data = files.write(file_path, data_txt);
        	console.log('write ==> ' + data);	
        });
    }
});

/*
files.read(file_path, function(data) { 
	data = files.print(data);
	console.log(data);
	
	data_txt = parseInt(data) + 1;
	console.log(data_txt);
	
	data = files.write(file_path, data_txt);
	console.log(data);	
});
*/


