var MyBaseObject = function() {};

MyBaseObject.prototype.hit = function() {
	console.log("Hit");
}

var util = require('util');


var MyChildObject = function() {}

util.inherits(MyChildObject, MyBaseObject);

var obj = new MyChildObject();

obj.hit(); 
