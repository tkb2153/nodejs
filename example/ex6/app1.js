var http = require('http');
 
var server3000 = http.createServer(function(req,res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Node.js Server 3000 port Start - ex6 of app1.js');                                  
});
var server3001 = http.createServer(function(req,res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Node.js Server 3001 port Start - ex6 of app1.js');                                  
});
 
server3000.listen(3000);
server3001.listen(3001);
 
console.log('Node.js Server Start - ex6 of app1.js');