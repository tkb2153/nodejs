var net = require('net');

var socket = new net.Socket();

socket.connect(3000, 'node.tkb2153.koding.io', function() {
	console.log('Connected');
});


