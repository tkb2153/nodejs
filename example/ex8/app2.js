var net = require('net');
//var process= require('process');

var socket = new net.Socket();

var cmd = {
	command: process.argv[2],
	args: []
};

for ( var i = 3; i < process.argv.length; i++ ) {
	cmd.args.push(process.argv[i]);
}

socket.setEncoding("utf8");
socket.connect(3000, 'node.tkb2153.koding.io', function() {
	console.log('Connected');
	//console.log(JSON.stringify(cmd));
	
	
	socket.write(JSON.stringify(cmd));

	socket.on('data', function(data) {
		console.log('sock data : ');
		console.log(data.toString());
		socket.destroy();
	});

	socket.on('close', function() { 
		process.exit();
	//	socket.destroy();
		console.log('Disconnected');
	});

});



