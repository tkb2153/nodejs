var mongoose = require('mongoose');

//連線localhost Mongodb of ex11_sample2
mongoose.connect('mongodb://localhost/ex11_sample2');

var Cat = mongoose.model('Cat', {
	name: String,
	age: Number
});

//建立資料
var kitty = new Cat({name: 'kitty', age: 10});

kitty.save(function (err) {
	if (err) {
		//存入失敗
		console.log('存入失敗');
		return;
	}
	
	//存入成功
	console.log('存入成功');
});



