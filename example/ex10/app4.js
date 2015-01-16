var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(app.router);
});

/*
app.get('/', function(req, res) {
	res.send('test');
});
*/
app.post('/:id', function(req, res) {
	var restful_id = req.params.id;
	var query_id = req.query.id;
	console.log('RestFul : id -> ' + restful_id);
	console.log('QueryString : id -> ' + query_id);
	console.log('User Name : ' + req.body.username);
	console.log('Email : ' + req.body.email);
	res.send('Restful : id -> ' + restful_id);
	res.send('Query : id -> ' + query_id);
	res.send('User Name : ' + req.body.username);
	res.send('Email : ' + req.body.email);
	res.end();
});

app.listen(3000);

