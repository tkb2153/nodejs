
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

app.get('*', function(req, res) {
	res.sendfile(__dirname + '/error.html');
});

io.on('connection', function(socket){
	console.log(app.path());
	console.log('a user connected');
	socket.on('chat message', function(msg){
		//console.log('message: ' + msg);
		io.emit('chat message', msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

