var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(app.router);
});

app.get('/', function(req, res) {
	res.send('This is GET method');
	res.end();
	console.log('This is GET method');
});

app.post('/', function(req, res) {
	res.send('This is POST method');
	res.end();
	console.log('This is POST method');
});

app.put('/', function(req, res) {
	res.send('This is PUT method');
	res.end();
	console.log('This is PUT method');
});


app.delete('/', function(req, res) {
	res.send('This is DELETE method');
	res.end();
	console.log('This is DELETE method');
});

app.listen(3000);



