var http = require('http');

var server = http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	res.end('Hello');
	console.log(req);
});

server.listen(12345);

console.log('Node.js Server Start');

/*
http.createServer(function(req, res) {
  res.end('Hello!\n');
}).listen(3000, process.argv[2]);

console.log('Sending greetings on ', process.argv[2] + ':3000');

http.createServer(function(req, res) {
  res.end('Hello!\n');
}).listen(3100, process.argv[2]);

console.log('Sending greetings on ', process.argv[2] + ':3100');
*/

