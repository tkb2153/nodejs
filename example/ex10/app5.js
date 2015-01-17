var express = require('express');
var app = express();

app.configure(function() {
	//app.use(express.static(__dirname + '/public'));	

	//Start cookie
	app.use(express.cookieParser());
	
	//Start Session
	app.use(express.session({
		secret: 'HelloExpressSESSION'
	}));

	//Start Router
	app.use(app.router);
});


app.get('/', function(req, res) {
	res.send('App5.js Start');
	res.end();
	console.log('App5.js Start');
});


app.get('/session_add', function(req, res) {
	var session = req.session;
	var count = session.count;
	if ( count ) {
		count++;
	} else {
		count = 1;
	}
	res.send('Session count : ' + count);
	res.end();
	console.log('Session count : ' + count);
});
/*
app.get('/session_start', function(req, res) {
	req.session = {
		count: 0
	};
	res.send('Session count : 0');
	res.end();
	console.log('Session count : 0');
});

app.get('/session_clear', function(req, res) {
	res.send('Session clear count');
	res.end();
	console.log('Session clear count');
});
*/

app.listen(3000);
//app.listen(process.env.PORT || 3000);
