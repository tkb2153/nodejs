var express = require('express');
var app = express();

app.configure(function() {
	app.use(app.router);
});

app.get('/:error', error);

function error(req, res) {
	var error_id = req.params.error;
	switch (error_id) {
		case 400:
			//res.status(400);
			res.writeHead(400, {'Content-Type': 'text/html'});
			break;
		case 404:
			//res.status(404);
			res.writeHead(404, {'Content-Type': 'text/html'});
			break;
		default:
			//res.status(200);
			res.writeHead(200, {'Content-Type': 'text/html'});
			break;
	}
	res.end();
}


app.listen(3000);


