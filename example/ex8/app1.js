var child_process = require('child_process');

var ls = child_process.spawn('ls', ['-lh', '/usr']);

ls.stdout.setEncoding('utf8');

ls.stdout.on('data', function(data) {
	console.log(data);
});

ls.on('end', function(data) {
	console.log('end');
});
/*
var exec = require('child_process').exec,
    ls    = exec('dir');

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});
*/

