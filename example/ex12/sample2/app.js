require('./lib/db');
var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.configure(function() {
	app.use(express.cookieParser());
	app.use(express.cookieSession({
		key: 'node',
		secret: 'HelloExpressSESSION'
	}));
	app.use(express.bodyParser());
});

app.use(app.router);
app.use(express.static(path.join(__dirname, '/public')));

if ( 'development' == app.get('env') ) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/register', user.register);
app.get('/signin', user.signin);
app.get('/signout', user.signout);
app.get('/forget', user.forget);
app.get('/add_article', user.add_article);
app.get('/profile', user.profile);
app.get('/modify/:id', user.modify);
app.get('/message/:id', user.message);
app.get('/register', user.register);
app.get('/apis/login', user.login);

app.post('/apis/login', user.login);
app.post('/apis/add', user.add);
app.get('/apis/delete/:id', user.del_article);
app.get('/apis/delete/:id', user.del_article);
app.get('/apis/delete/:id', user.update);
app.post('/apis/update/:id', user.update);
app.post('/apis/comment/:id', user.comment);



http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port' + app.get('port'));
});


