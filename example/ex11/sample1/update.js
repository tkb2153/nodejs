var mongodb = require('mongodb'),
	MongoClient = mongodb.MongoClient;
	
MongoClient.connect('mongodb://localhost/ex11_sample1', function(err, db) {
	//選擇資料表
	db.collection('contact', function(err, collection) {
		collection.update({
			name: 'Fred'
		},{
			name: 'Fred',
			tel: 'update',
			address: 'Taipei'
		},function(err, docs) {
			if ( err ) {
				console.log('修改失敗');
				return ;
			}
			console.log('修改成功');
		});
	});
	
});
	