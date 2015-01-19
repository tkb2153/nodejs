var mongoose = require('mongoose');

//連線localhost Mongodb of ex11_sample2
mongoose.connect('mongodb://localhost/ex11_sample2');

var Cat = mongoose.model('Cat', {
	name: String,
	age: Number
});

Cat.update({name: 'kitty'}, {name: 'blue', age: 111},function(err) {
	if (err)
		console.log('修改失敗');
	else
		console.log('修改成功');
});




