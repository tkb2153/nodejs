var mongoose = require('mongoose');

//連線localhost Mongodb of ex11_sample2
mongoose.connect('mongodb://localhost/ex11_sample2');

var Cat = mongoose.model('Cat', {
	name: String,
	age: Number
});

//建立資料
var kitty = new Cat();

kitty.name = 'add';
kitty.age = 5;
kitty.save();



