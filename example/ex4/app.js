var object_module = require('./hello_module');

console.log(object_module.name);
console.log(object_module.desc);
console.log(object_module.url);

for ( var index in object_module.arrays ) {
	console.log(object_module.arrays[index]);
}

object_module.funs();
