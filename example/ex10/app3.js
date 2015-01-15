var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(app.router);
});

app.get('/:id', function(req, res) {
	var id = req.params.id;
	res.send('This is GET method -> ' + id);
	res.end();
	console.log('This is GET method -> ' + id);
});

app.post('/:id', function(req, res) {
	var id = req.params.id;
	res.send('This is POST method -> ' + id);
	res.end();
	console.log('This is POST method -> ' + id);
});

app.put('/:id', function(req, res) {
	var id = req.params.id;
	res.send('This is PUT method -> ' + id);
	res.end();
	console.log('This is PUT method -> ' + id);
});


app.delete('/:id', function(req, res) {
	var id = req.params.id;
	res.send('This is DELETE method -> ' + id);
	res.end();
	console.log('This is DELETE method -> ' + id);
});

app.listen(3000);



