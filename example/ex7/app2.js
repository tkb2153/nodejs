var net = require('net');

var socket = new net.Socket();

socket.connect(3000, 'node.tkb2153.koding.io', function() {
	socket.write('client 3000 port -> app2.js');
	console.log('Connected');
	socket.destroy();//自動關閉連線
});


