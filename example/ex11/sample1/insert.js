var mongodb = require('mongodb'),
	MongoClient = mongodb.MongoClient;
	
MongoClient.connect('mongodb://localhost/ex11_sample1', function(err, db) {
	//選擇資料表
	db.collection('contact', function(err, collection) {
		collection.insert({
			name: 'Fred',
			tel: 'insert',
			address: 'Taipei'
		},function(err, docs) {
			if ( err ) {
				console.log('新增失敗');
				return ;
			}
			console.log('新增成功');
		});
	});
	
});
	