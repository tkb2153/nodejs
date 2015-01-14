var net = require('net');

var server= net.createServer();

server.listen(3000);

server.on('connection', function(socket) { 
	socket.on('data', function(chunk) {
		console.log(chunk.toString());
	});
	console.log('New connection was established');
});



