var mongoose = require('mongoose');

//連線localhost Mongodb of ex11_sample2
mongoose.connect('mongodb://localhost/ex11_sample2');

var Cat = mongoose.model('Cat', {
	name: String,
	age: Number
});

Cat.remove({name: 'kitty'}, function(err) {
	if (err)
		console.log('刪除失敗');
	else
		console.log('刪除成功');
});




