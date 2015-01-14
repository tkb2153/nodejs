var net = require('net');

var server= net.createServer();

server.listen(3000);

server.on('connection', function(socket) { 
	console.log('New connection was established');
});



