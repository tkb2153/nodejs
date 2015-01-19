var mongoose = require('mongoose');

//連線localhost Mongodb of ex11_sample2
mongoose.connect('mongodb://localhost/ex11_sample2');

var Cat = mongoose.model('Cat', {
	name: String,
	age: Number
});
console.log('name: kitty');
Cat.find({name: 'kitty'}, function(err, cats) {
	for (var index in cats) {
		var cat = cats[index];
		console.log(cat.name);
	}
});

//尋找age大於等於5
console.log('$gte: 5');
Cat.find({ age: { $gte: 5} }, function(err, cats) {
	for (var index in cats) {
		var cat = cats[index];
		console.log(cat.name);
	}
});

//尋找name裡面包含kitty字串
console.log('$gte: 5');
Cat.find({ name: /kitty/i }, function(err, cats) {
	for (var index in cats) {
		var cat = cats[index];
		console.log(cat.name);
	}
});

console.log('All List');
Cat.find(function(err, cats) {
	for (var index in cats) {
		var cat = cats[index];
		console.log(cat.name);
	}
});



