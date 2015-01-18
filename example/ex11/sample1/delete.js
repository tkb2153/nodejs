var mongodb = require('mongodb'),
	MongoClient = mongodb.MongoClient;
	
MongoClient.connect('mongodb://localhost/ex11_sample1', function(err, db) {
	//選擇資料表
	db.collection('contact', function(err, collection) {
		collection.remove({
			name: 'Fred'
		},function(err) {
			if ( err ) {
				console.log('刪除失敗');
				return ;
			}
			console.log('刪除成功');
		});
	});
	
});
	