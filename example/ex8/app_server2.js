var net = require('net');
var child_process = require('child_process');

var server = net.createServer();

server.listen(3000);

server.on('connection', function(socket) {
	var child = null;
	var cmdStr = '';

	socket.setEncoding("utf8");	
	socket.on('data', function(cli_data) {
		cmdStr += cli_data.toString();

		/*if ( cli_data.toString().indexOf('\n') == -1 ) {
			console.log(cli_data.toString().indexOf('\n'));
			return ;
		}*/

		var cmd = JSON.parse(cli_data);

		child = child_process.spawn(cmd.command, cmd.args);

		child.stdout.on('data', function(output) {
			socket.write(output);
		});

		child.on('end', function() {
			socket.destroy();
			child = null;
		});
	});
	
	socket.on('end', function() {
		if ( child ) 
			child.kill();
	});
});


