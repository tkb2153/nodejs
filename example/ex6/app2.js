var http = require('http');
var url= require('url');
 
var server3000 = http.createServer().listen(3000);

server3000.on('request', function(req, res) {
	res.writeHead('200', {'Content-Type': 'text/plain'});
	var url_parts = url.parse(req.url, true);
	switch ( url_parts.pathname ) {
		case '/':
			res.write('url to -> / \n');
		break;
		default:
			res.write('url to -> ' + url_parts.pathname + '\n');
		break;
	}
	res.end('Node.js Server Start - ex6 of app2.js');
	
});
 
console.log('Node.js Server 3000 port Start - ex6 of app2.js');

