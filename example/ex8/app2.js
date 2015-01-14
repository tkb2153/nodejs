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


socket.connect(3000, 'node.tkb2153.koding.io', function() {
	console.log('Connected');
	console.log(JSON.stringify(cmd));
	
	
	socket.write(JSON.stringify(cmd));

	socket.on('data', function(data) {
		console.log(data);
	});
	//socket.destroy();

	socket.on('end', function() { 
		process.exit();
		console.log('Disconnected');
	});

});



