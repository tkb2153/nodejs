var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

var targetURL = process.argv[2] || null;

if ( ! targetURL ) {
	console.log('enter URL');
	process.exit();
}

var urlObj = url.parse(targetURL);

var req = http.request({
	hostname: urlObj.hostname,
	path: urlObj.path,
	method: 'GET'
},function(res) {
	var filename = path.basename(urlObj.path);
	
	fs.exists(filename, function(exists) {
		if ( exists ) {
			fs.unlink(filename, function(err) {
				saveFile();
			});
			return ;
		}
		saveFile();
	});

	function saveFile() {
		res.on('data', function(chunk) {
			fs.appendFileSync(filename, chunk);
		});
		
		res.on('end', function(chunk) {
			process.exit();
		});
	}
});

/*
var req = http.request({
	hostname: 'www.google.com',
	path: '/',
	method: 'GET'
}, function(res) {
	res.on('data', function(chunk) {
		console.log(chunk.toString());
	});

	res.on('end', function(chunk) {
		process.exit();
	});
});
*/

